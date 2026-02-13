import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile, readdir } from 'fs/promises'
import path from 'path'
import { uploadImage } from '@/lib/storage'

async function findTsxFiles(dir: string): Promise<string[]> {
  const results: string[] = []
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.next') {
      results.push(...await findTsxFiles(full))
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      results.push(full)
    }
  }
  return results
}

async function replaceImageInSource(oldSrc: string, newSrc: string) {
  const oldSrcClean = oldSrc.split('?')[0]
  const decoded = decodeURIComponent(oldSrcClean)

  let searchStr = decoded
  const match = decoded.match(/\/images\/[^"'&\n]+/)
  if (match) searchStr = match[0].trimEnd()

  const srcDir = path.resolve(process.cwd(), 'src')
  const files = await findTsxFiles(srcDir)

  const matchedFiles: { path: string; content: string }[] = []

  for (const file of files) {
    const content = await readFile(file, 'utf-8')
    if (content.includes(searchStr)) {
      matchedFiles.push({ path: file, content })
    }
  }

  if (matchedFiles.length === 0) {
    return { error: `Could not find "${searchStr}" in any source file`, updatedFiles: [] }
  }

  const updatedFiles: string[] = []
  for (const { path: filePath, content } of matchedFiles) {
    const updated = content.replaceAll(searchStr, newSrc)
    await writeFile(filePath, updated, 'utf-8')
    updatedFiles.push(path.relative(process.cwd(), filePath))
  }

  return { updatedFiles }
}

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Dev only' }, { status: 403 })
  }

  // JSON mode: replace image path in source without uploading
  const contentType = req.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    try {
      const { oldSrc, newSrc } = await req.json()
      if (!oldSrc || !newSrc) {
        return NextResponse.json({ error: 'Missing oldSrc or newSrc' }, { status: 400 })
      }
      const result = await replaceImageInSource(oldSrc, newSrc)
      if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 404 })
      }
      return NextResponse.json({ success: true, newSrc, updatedFiles: result.updatedFiles })
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }
  }

  const formData = await req.formData()
  const image = formData.get('image') as File | null
  const oldSrc = formData.get('oldSrc') as string | null
  const uploadOnly = formData.get('uploadOnly') === 'true'

  if (!image) {
    return NextResponse.json({ error: 'Missing image' }, { status: 400 })
  }

  try {
    const ext = path.extname(image.name) || '.jpg'
    const basename = path.basename(image.name, ext).replace(/[^a-zA-Z0-9-_]/g, '-')
    const filename = `${basename}-${Date.now()}${ext}`
    const buffer = Buffer.from(await image.arrayBuffer())

    // Upload to Supabase Storage
    let newSrc: string
    try {
      newSrc = await uploadImage(buffer, filename, image.type || 'image/jpeg')
    } catch {
      // Fallback to local filesystem if Supabase upload fails
      const imagePath = path.join(process.cwd(), 'public', 'images', filename)
      await writeFile(imagePath, buffer)
      newSrc = `/images/${filename}`
    }

    // If upload-only mode (Add Photo), just return the URL
    if (uploadOnly || !oldSrc) {
      return NextResponse.json({ success: true, newSrc })
    }

    // Otherwise, replace the old image reference in source files
    const result = await replaceImageInSource(oldSrc, newSrc)
    if (result.error) {
      return NextResponse.json({
        error: result.error,
        newImageUrl: newSrc,
      }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      newSrc,
      updatedFiles: result.updatedFiles,
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
