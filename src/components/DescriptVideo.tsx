'use client'

import { Play, ExternalLink } from 'lucide-react'

interface DescriptVideoProps {
  url: string
  title?: string
  description?: string
  thumbnail?: string
}

export default function DescriptVideo({ url, title, description, thumbnail }: DescriptVideoProps) {
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

      {/* Video Card - Opens in new tab */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        style={{ paddingBottom: '56.25%' }}
      >
        {/* Background/Thumbnail */}
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800 to-sunset-800">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title || 'Video thumbnail'}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-12 h-12 text-white ml-1" />
                </div>
                <p className="text-white/90 text-lg font-semibold">Click to Watch Video</p>
              </div>
            </div>
          )}
        </div>

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
            <Play className="w-10 h-10 text-earth-900 ml-1" fill="currentColor" />
          </div>
        </div>

        {/* External link indicator */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 text-sm font-semibold text-earth-900">
          <span>Watch on Descript</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </a>

      <p className="mt-3 text-sm text-gray-500 text-center">
        Click to watch video in a new window
      </p>
    </div>
  )
}
