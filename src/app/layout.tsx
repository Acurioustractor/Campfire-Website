import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CAMPFIRE - Cultural Advancement and Mentoring Program',
  description: 'Indigenous-led youth mentoring program in Mount Isa. Supporting Aboriginal and Torres Strait Islander youth ages 10-17 through culture, fitness, and community.',
  keywords: ['Indigenous youth', 'mentoring', 'Mount Isa', 'cultural program', 'youth support', 'CAMPFIRE'],
  authors: [{ name: 'A Curious Tractor' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://campfire-mountisa.org',
    siteName: 'CAMPFIRE',
    title: 'CAMPFIRE - Cultural Advancement and Mentoring Program',
    description: 'Indigenous-led youth mentoring program in Mount Isa',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CAMPFIRE Program',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAMPFIRE - Cultural Advancement and Mentoring Program',
    description: 'Indigenous-led youth mentoring program in Mount Isa',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
