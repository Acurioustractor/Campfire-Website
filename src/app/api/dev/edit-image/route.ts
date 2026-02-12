import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile, readdir, stat } from 'fs/promises'
import path from 'path'

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

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Dev only' }, { status: 403 })
  }

  const formData = await req.formData()
  const image = formData.get('image') as File | null
  const oldSrc = formData.get('oldSrc') as string | null

  if (!image || !oldSrc) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    // Save image with timestamped name
    const ext = path.extname(image.name) || '.jpg'
    const basename = path.basename(image.name, ext).replace(/[^a-zA-Z0-9-_]/g, '-')
    const filename = `${basename}-${Date.now()}${ext}`
    const imagePath = path.join(process.cwd(), 'public', 'images', filename)

    const buffer = Buffer.from(await image.arrayBuffer())
    await writeFile(imagePath, buffer)

    const newSrc = `/images/${filename}`

    // Extract the clean /images/... path from the runtime src
    // Next.js may transform it to /images/20240324-IMG_5881-1770861532658.jpg?url=%2Fimages%2F...
    const oldSrcClean = oldSrc.split('?')[0]
    const decoded = decodeURIComponent(oldSrcClean)

    let searchStr = decoded
    // Try extracting just the /images/... portion
    const match = decoded.match(/\/images\/[^\s"'&]+/)
    if (match) searchStr = match[0]

    // Search all .tsx/.ts files in src/ for this image path
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
      return NextResponse.json({
        error: `Could not find "${searchStr}" in any source file`,
        newImageUrl: newSrc,
      }, { status: 404 })
    }

    // Replace in all files that reference this image
    const updatedFiles: string[] = []
    for (const { path: filePath, content } of matchedFiles) {
      const updated = content.replaceAll(searchStr, newSrc)
      await writeFile(filePath, updated, 'utf-8')
      updatedFiles.push(path.relative(process.cwd(), filePath))
    }

    return NextResponse.json({
      success: true,
      newSrc,
      updatedFiles,
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
