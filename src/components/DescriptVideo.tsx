'use client'

interface DescriptVideoProps {
  url: string
  title?: string
  description?: string
}

export default function DescriptVideo({ url, title, description }: DescriptVideoProps) {
  return (
    <div className="my-8">
      {title && (
        <h3 className="font-display font-bold text-2xl text-earth-900 mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      )}
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={url}
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title={title || 'Video'}
        />
      </div>
    </div>
  )
}
