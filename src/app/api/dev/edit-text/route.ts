import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Dev only' }, { status: 403 })
  }

  const { filePath, oldText, newText } = await req.json()

  if (!filePath || !oldText || !newText) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  // Security: ensure path is within src/
  const resolved = path.resolve(process.cwd(), filePath)
  if (!resolved.startsWith(path.resolve(process.cwd(), 'src'))) {
    return NextResponse.json({ error: 'Path must be within src/' }, { status: 403 })
  }

  try {
    const content = await readFile(resolved, 'utf-8')

    // Count occurrences to avoid ambiguous replacements
    const occurrences = content.split(oldText).length - 1
    if (occurrences === 0) {
      return NextResponse.json({ error: 'Text not found in source file. It may span multiple lines or include special characters.' }, { status: 404 })
    }
    if (occurrences > 1) {
      return NextResponse.json({ error: `Text appears ${occurrences} times in file. Please edit in code to avoid ambiguity.` }, { status: 409 })
    }

    const updated = content.replace(oldText, newText)
    await writeFile(resolved, updated, 'utf-8')

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
