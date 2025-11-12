import Link from 'next/link'
import { ArrowRight, Users, Handshake, Mail } from 'lucide-react'

const actions = [
  {
    title: 'Refer a Young Person',
    description: 'Know a young person who could benefit from CAMPFIRE? Submit a referral today.',
    icon: Users,
    href: '/refer',
    cta: 'Make a Referral',
    bgColor: 'from-sunset-500 to-sunset-600',
  },
  {
    title: 'Partner With Us',
    description: 'Join us in supporting Indigenous youth through cultural and community programs.',
    icon: Handshake,
    href: '/partnerships',
    cta: 'Explore Partnerships',
    bgColor: 'from-earth-600 to-earth-700',
  },
  {
    title: 'Stay Connected',
    description: 'Get updates on our programs, events, and community stories.',
    icon: Mail,
    href: '/contact',
    cta: 'Sign Up',
    bgColor: 'from-country-600 to-country-700',
  },
]

export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-earth-900 mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600">
            There are many ways to support young people in our community. Choose the path that's right for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <div
                key={action.title}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${action.bgColor} text-white p-8 hover:scale-105 transition-transform duration-200`}
              >
                <div className="relative z-10">
                  <div className="mb-4">
                    <Icon className="h-12 w-12" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3">
                    {action.title}
                  </h3>
                  <p className="text-white/90 mb-6">
                    {action.description}
                  </p>
                  <Link
                    href={action.href}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    {action.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Decorative background pattern */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-10">
                  <Icon className="h-48 w-48" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
