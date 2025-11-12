import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  width?: number
  height?: number
  className?: string
  showText?: boolean
  linkToHome?: boolean
  variant?: 'light' | 'dark' // light = dark text (default), dark = white text
}

export default function Logo({
  width = 120,
  height = 40,
  className = '',
  showText = true,
  linkToHome = true,
  variant = 'light'
}: LogoProps) {
  const textColorClass = variant === 'dark' ? 'text-white' : 'text-gray-900'
  const subtextColorClass = variant === 'dark' ? 'text-earth-200' : 'text-gray-600'

  const logoContent = (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/campfire-logo.svg"
        alt="CAMPFIRE Logo"
        width={width}
        height={height}
        priority
        className="h-auto w-auto"
      />
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold text-xl md:text-2xl ${textColorClass} leading-tight`}>
            CAMPFIRE
          </span>
          <span className={`text-xs ${subtextColorClass} leading-tight`}>
            Cultural Advancement & Mentoring
          </span>
        </div>
      )}
    </div>
  )

  if (linkToHome) {
    return (
      <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
        <span className="sr-only">CAMPFIRE - Go to homepage</span>
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
