import Image from 'next/image'

interface PhotoGalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  columns?: 2 | 3 | 4
}

export default function PhotoGallery({ images, columns = 3 }: PhotoGalleryProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {images.map((image, index) => (
        <div key={index} className="group">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-200">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {image.caption && (
            <p className="mt-2 text-sm text-gray-600 text-center">{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  )
}
