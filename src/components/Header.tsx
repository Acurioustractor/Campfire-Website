'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/Logo'
import type { NavLink } from '@/types'

const navigation: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'What We Offer', href: '/services' },
  { name: 'Our Stories', href: '/stories' },
  { name: 'Partnerships', href: '/partnerships' },
  { name: 'Refer a Young Person', href: '/refer' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <Logo width={14} height={14} showText={false} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[10px] text-gray-700 hover:text-sunset-600"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/refer"
              className="text-[10px] px-2 py-1 bg-sunset-600 text-white rounded hover:bg-sunset-700"
            >
              Refer Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-1"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-4 w-4 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white p-6">
            <div className="flex items-center justify-between mb-6">
              <Logo width={20} height={20} showText={false} />
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/refer"
                className="mt-4 text-center px-4 py-2 bg-sunset-600 text-white rounded font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Refer a Young Person
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
