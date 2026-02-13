'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const ROUTE_TO_FILE: Record<string, string> = {
  '/': 'src/app/page.tsx',
  '/about': 'src/app/about/page.tsx',
  '/services': 'src/app/services/page.tsx',
  '/gallery': 'src/app/gallery/page.tsx',
  '/stories': 'src/app/stories/page.tsx',
  '/stories/mount-isa-naidoc-week-2024': 'src/app/stories/mount-isa-naidoc-week-2024/page.tsx',
  '/stories/my-journey-brodie-germaine': 'src/app/stories/my-journey-brodie-germaine/page.tsx',
  '/partnerships': 'src/app/partnerships/page.tsx',
  '/contact': 'src/app/contact/page.tsx',
  '/refer': 'src/app/refer/page.tsx',
  '/impact': 'src/app/impact/page.tsx',
}

const EDITABLE_TEXT_TAGS = new Set([
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'SPAN', 'LI', 'A', 'BLOCKQUOTE', 'LABEL',
])

export default function InlineEditor() {
  const [editMode, setEditMode] = useState(false)
  const [hoveredEl, setHoveredEl] = useState<HTMLElement | null>(null)
  const [editingText, setEditingText] = useState<{ element: HTMLElement; original: string } | null>(null)
  const [newText, setNewText] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [showGallery, setShowGallery] = useState(false)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [galleryLoading, setGalleryLoading] = useState(false)
  const [galleryFilter, setGalleryFilter] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const addPhotoInputRef = useRef<HTMLInputElement>(null)
  const editingImageRef = useRef<HTMLImageElement | null>(null)
  const pathname = usePathname()

  const filePath = ROUTE_TO_FILE[pathname] || null

  const getDirectTextContent = (el: HTMLElement): string => {
    // Get only direct text nodes, not children's text
    let text = ''
    for (const node of el.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent
      }
    }
    return text.trim()
  }

  const handleMouseOver = useCallback((e: MouseEvent) => {
    if (!editMode) return
    const target = e.target as HTMLElement
    if (target.closest('[data-inline-editor-ui]')) return
    if (EDITABLE_TEXT_TAGS.has(target.tagName) || target.tagName === 'IMG') {
      setHoveredEl(target)
      e.stopPropagation()
    }
  }, [editMode])

  const handleMouseOut = useCallback((e: MouseEvent) => {
    if (!editMode) return
    setHoveredEl(null)
  }, [editMode])

  const handleClick = useCallback((e: MouseEvent) => {
    if (!editMode || !filePath) return
    const target = e.target as HTMLElement

    // Ignore clicks inside the gallery modal or any editor UI
    if ((target as HTMLElement).closest('[data-inline-editor-ui]')) return

    if (target.tagName === 'IMG') {
      e.preventDefault()
      e.stopPropagation()
      editingImageRef.current = target as HTMLImageElement
      setShowGallery(true)
      setGalleryFilter('')
      setGalleryLoading(true)
      fetch('/api/dev/list-images')
        .then(r => r.json())
        .then(data => setGalleryImages(data.images || []))
        .catch(() => setGalleryImages([]))
        .finally(() => setGalleryLoading(false))
      return
    }

    if (EDITABLE_TEXT_TAGS.has(target.tagName)) {
      e.preventDefault()
      e.stopPropagation()
      const text = getDirectTextContent(target) || target.textContent?.trim() || ''
      if (!text) return
      setEditingText({ element: target, original: text })
      setNewText(text)
      setError(null)
    }
  }, [editMode, filePath])

  useEffect(() => {
    if (editMode) {
      document.addEventListener('mouseover', handleMouseOver, true)
      document.addEventListener('mouseout', handleMouseOut, true)
      document.addEventListener('click', handleClick, true)
    }
    return () => {
      document.removeEventListener('mouseover', handleMouseOver, true)
      document.removeEventListener('mouseout', handleMouseOut, true)
      document.removeEventListener('click', handleClick, true)
    }
  }, [editMode, handleMouseOver, handleMouseOut, handleClick])

  const saveText = async () => {
    if (!editingText || !filePath) return
    setSaving(true)
    setError(null)
    try {
      const res = await fetch('/api/dev/edit-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filePath,
          oldText: editingText.original,
          newText: newText,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Failed to save')
        return
      }
      setEditingText(null)
    } catch (err) {
      setError('Network error')
    } finally {
      setSaving(false)
    }
  }

  const getRawImageSrc = (img: HTMLImageElement): string => {
    let rawSrc = img.getAttribute('src') || ''
    if (rawSrc.includes('/_next/image')) {
      try {
        const urlObj = new URL(rawSrc, window.location.origin)
        rawSrc = urlObj.searchParams.get('url') || rawSrc
      } catch {}
    }
    return rawSrc
  }

  const handleGalleryPick = async (newSrc: string) => {
    const img = editingImageRef.current
    if (!img) return

    setSaving(true)
    setError(null)
    setShowGallery(false)
    try {
      const oldSrc = getRawImageSrc(img)
      const res = await fetch('/api/dev/edit-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldSrc, newSrc }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Failed to swap image')
      } else {
        window.location.reload()
        return
      }
    } catch {
      setError('Network error')
    } finally {
      setSaving(false)
      editingImageRef.current = null
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const img = editingImageRef.current
    if (!file || !img) return

    setSaving(true)
    setError(null)
    try {
      const rawSrc = getRawImageSrc(img)

      const formData = new FormData()
      formData.append('image', file)
      formData.append('oldSrc', rawSrc)

      const res = await fetch('/api/dev/edit-image', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Failed to upload image')
      }
    } catch (err) {
      setError('Network error')
    } finally {
      setSaving(false)
      editingImageRef.current = null
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const handleAddPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setSaving(true)
    setError(null)
    try {
      const formData = new FormData()
      formData.append('image', file)
      formData.append('uploadOnly', 'true')

      const res = await fetch('/api/dev/edit-image', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Failed to upload')
        return
      }
      // Copy URL to clipboard
      await navigator.clipboard.writeText(data.newSrc)
      setToast(`URL copied: ${data.newSrc}`)
      setTimeout(() => setToast(null), 4000)
    } catch (err) {
      setError('Network error')
    } finally {
      setSaving(false)
      if (addPhotoInputRef.current) addPhotoInputRef.current.value = ''
    }
  }

  // Handle hover highlighting via DOM attribute
  useEffect(() => {
    if (hoveredEl) {
      hoveredEl.setAttribute('data-inline-hover', 'true')
      return () => {
        hoveredEl.removeAttribute('data-inline-hover')
      }
    }
  }, [hoveredEl])

  return (
    <>
      {/* Hover highlight styles */}
      {editMode && (
        <style dangerouslySetInnerHTML={{ __html: `
          [data-inline-hover="true"] {
            outline: 2px solid #3b82f6 !important;
            outline-offset: 2px;
            cursor: pointer !important;
          }
        `}} />
      )}

      {/* Toolbar */}
      <div style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 99999,
        display: 'flex',
        gap: 8,
      }}>
        {editMode && (
          <button
            onClick={() => addPhotoInputRef.current?.click()}
            disabled={saving}
            style={{
              padding: '10px 16px',
              borderRadius: 8,
              border: 'none',
              background: '#10b981',
              color: 'white',
              fontWeight: 600,
              fontSize: 14,
              cursor: saving ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            {saving ? 'Uploading...' : 'Add Photo'}
          </button>
        )}
        <button
          onClick={() => {
            setEditMode(prev => !prev)
            setEditingText(null)
            setError(null)
          }}
          style={{
            padding: '10px 16px',
            borderRadius: 8,
            border: 'none',
            background: editMode ? '#ef4444' : '#3b82f6',
            color: 'white',
            fontWeight: 600,
            fontSize: 14,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          {editMode ? 'Exit Edit Mode' : 'Edit Page'}
        </button>
      </div>

      {/* No file mapping warning */}
      {editMode && !filePath && (
        <div style={{
          position: 'fixed',
          bottom: 70,
          right: 20,
          zIndex: 99999,
          padding: '8px 12px',
          borderRadius: 6,
          background: '#fbbf24',
          color: '#92400e',
          fontSize: 12,
          fontWeight: 500,
        }}>
          No file mapping for {pathname}
        </div>
      )}

      {/* Error toast */}
      {error && (
        <div
          onClick={() => setError(null)}
          style={{
            position: 'fixed',
            bottom: 70,
            right: 20,
            zIndex: 99999,
            padding: '8px 12px',
            borderRadius: 6,
            background: '#fecaca',
            color: '#991b1b',
            fontSize: 12,
            cursor: 'pointer',
            maxWidth: 300,
          }}
        >
          {error}
        </div>
      )}

      {/* Text edit modal */}
      {editingText && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.5)',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setEditingText(null)
              setError(null)
            }
          }}
        >
          <div style={{
            background: 'white',
            borderRadius: 12,
            padding: 24,
            width: '90%',
            maxWidth: 600,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: '#374151' }}>
              Edit Text
            </div>
            <div style={{ fontSize: 11, color: '#9ca3af', marginBottom: 12 }}>
              {filePath}
            </div>
            <textarea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              rows={6}
              style={{
                width: '100%',
                padding: 12,
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: 14,
                fontFamily: 'inherit',
                resize: 'vertical',
                outline: 'none',
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              autoFocus
            />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 12 }}>
              <button
                onClick={() => {
                  setEditingText(null)
                  setError(null)
                }}
                style={{
                  padding: '8px 16px',
                  borderRadius: 6,
                  border: '1px solid #d1d5db',
                  background: 'white',
                  cursor: 'pointer',
                  fontSize: 13,
                }}
              >
                Cancel
              </button>
              <button
                onClick={saveText}
                disabled={saving || newText === editingText.original}
                style={{
                  padding: '8px 16px',
                  borderRadius: 6,
                  border: 'none',
                  background: saving ? '#93c5fd' : '#3b82f6',
                  color: 'white',
                  cursor: saving ? 'not-allowed' : 'pointer',
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {toast && (
        <div
          onClick={() => setToast(null)}
          style={{
            position: 'fixed',
            bottom: 70,
            right: 20,
            zIndex: 99999,
            padding: '8px 12px',
            borderRadius: 6,
            background: '#d1fae5',
            color: '#065f46',
            fontSize: 12,
            cursor: 'pointer',
            maxWidth: 400,
            wordBreak: 'break-all',
          }}
        >
          {toast}
        </div>
      )}

      {/* Image gallery picker modal */}
      {showGallery && (
        <div
          data-inline-editor-ui
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.5)',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowGallery(false)
              editingImageRef.current = null
            }
          }}
        >
          <div style={{
            background: 'white',
            borderRadius: 12,
            padding: 24,
            width: '90%',
            maxWidth: 720,
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Choose Image</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={() => {
                    setShowGallery(false)
                    fileInputRef.current?.click()
                  }}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 6,
                    border: 'none',
                    background: '#10b981',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 12,
                    cursor: 'pointer',
                  }}
                >
                  Upload New
                </button>
                <button
                  onClick={() => {
                    setShowGallery(false)
                    editingImageRef.current = null
                  }}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 6,
                    border: '1px solid #d1d5db',
                    background: 'white',
                    cursor: 'pointer',
                    fontSize: 12,
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
            <input
              type="text"
              placeholder="Filter by filename..."
              value={galleryFilter}
              onChange={(e) => setGalleryFilter(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: 6,
                border: '1px solid #d1d5db',
                fontSize: 13,
                marginBottom: 12,
                outline: 'none',
                boxSizing: 'border-box',
              }}
              autoFocus
            />
            <div style={{
              flex: 1,
              overflowY: 'auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: 8,
              alignContent: 'start',
            }}>
              {galleryLoading ? (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 40, color: '#9ca3af', fontSize: 13 }}>
                  Loading images...
                </div>
              ) : (
                galleryImages
                  .filter(img => !galleryFilter || img.toLowerCase().includes(galleryFilter.toLowerCase()))
                  .map((imgPath) => (
                    <button
                      key={imgPath}
                      onClick={() => handleGalleryPick(imgPath)}
                      style={{
                        padding: 4,
                        border: '2px solid transparent',
                        borderRadius: 6,
                        background: '#f9fafb',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'border-color 0.15s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#3b82f6')}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
                    >
                      <img
                        src={imgPath}
                        alt={imgPath.split('/').pop() || ''}
                        style={{
                          width: '100%',
                          height: 100,
                          objectFit: 'cover',
                          borderRadius: 4,
                          display: 'block',
                        }}
                      />
                      <div style={{
                        fontSize: 10,
                        color: '#6b7280',
                        marginTop: 4,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}>
                        {imgPath.split('/').pop()}
                      </div>
                    </button>
                  ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hidden file input for image replacement */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />

      {/* Hidden file input for Add Photo */}
      <input
        ref={addPhotoInputRef}
        type="file"
        accept="image/*"
        onChange={handleAddPhoto}
        style={{ display: 'none' }}
      />
    </>
  )
}
