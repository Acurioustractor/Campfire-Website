import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import path from 'path'

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.svg'])

export async function GET() {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Dev only' }, { status: 403 })
  }

  try {
    const imagesDir = path.join(process.cwd(), 'public', 'images')
    const entries = await readdir(imagesDir, { recursive: true })
    const images = entries
      .filter((entry) => IMAGE_EXTENSIONS.has(path.extname(String(entry)).toLowerCase()))
      .map((entry) => `/images/${String(entry)}`)
      .sort()

    return NextResponse.json({ images })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
