import { getSupabase } from './supabase'

const BUCKET = 'campfire-images'

/**
 * Upload an image to Supabase Storage and return its public URL.
 */
export async function uploadImage(
  file: Buffer,
  filename: string,
  contentType: string = 'image/jpeg'
): Promise<string> {
  const supabase = getSupabase()

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(filename, file, {
      contentType,
      upsert: false,
    })

  if (error) {
    throw new Error(`Storage upload failed: ${error.message}`)
  }

  const { data: urlData } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(filename)

  return urlData.publicUrl
}
