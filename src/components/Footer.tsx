import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Logo from '@/components/Logo'

const navigation = {
  about: [
    { name: 'About CAMPFIRE', href: '/about' },
    { name: 'What We Offer', href: '/services' },
    { name: 'Our Stories', href: '/stories' },
  ],
  support: [
    { name: 'Refer a Young Person', href: '/refer' },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-2">
              <Logo width={28} height={28} showText={false} linkToHome={true} variant="dark" />
            </div>
            <h3 className="font-display font-bold text-base mb-2">CAMPFIRE</h3>
            <p className="text-earth-200 mb-4 max-w-md">
              Cultural Advancement and Mentoring Program - Supporting Aboriginal and Torres Strait Islander youth in Mount Isa through culture, fitness, and community connection.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-earth-200">
                <MapPin className="h-5 w-5" />
                <span>Mount Isa, North Queensland</span>
              </div>
              <div className="flex items-center space-x-2 text-earth-200">
                <Phone className="h-5 w-5" />
                <a href="tel:+61000000000" className="hover:text-white transition-colors">
                  (Contact number to be added)
                </a>
              </div>
              <div className="flex items-center space-x-2 text-earth-200">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@campfire.org.au" className="hover:text-white transition-colors">
                  info@campfire.org.au
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              {navigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-earth-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-earth-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-earth-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-earth-200 text-sm">
              <p>&copy; {new Date().getFullYear()} CAMPFIRE. All rights reserved.</p>
              <p className="mt-1">
                Funded by Youth Justice Kickstarter Grant.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="mt-6 text-earth-200 text-sm max-w-3xl">
            <p className="italic">
              We acknowledge the Traditional Owners of the lands on which we work and live, and pay our respects to Elders past, present, and emerging. CAMPFIRE is proudly led by the Pita Pita Waka'i people and guided by community Elders.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
