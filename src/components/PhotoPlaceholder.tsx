import Image from 'next/image'

interface PhotoPlaceholderProps {
  title: string
  aspectRatio?: 'square' | 'video' | 'portrait'
  caption?: string
}

export default function PhotoPlaceholder({
  title,
  aspectRatio = 'video',
  caption
}: PhotoPlaceholderProps) {
  const ratios = {
    square: 'aspect-square',
    video: 'aspect-[16/9]',
    portrait: 'aspect-[3/4]',
  }

  return (
    <div className="my-6">
      <div className={`relative ${ratios[aspectRatio]} w-full bg-gradient-to-br from-earth-200 to-sunset-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center`}>
        <div className="text-center p-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-white font-semibold text-lg">{title}</p>
          <p className="text-white/80 text-sm mt-2">Photo placeholder - ready for your image</p>
        </div>
      </div>
      {caption && (
        <p className="mt-2 text-sm text-gray-600 italic text-center">{caption}</p>
      )}
    </div>
  )
}
