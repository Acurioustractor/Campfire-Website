import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Dumbbell, Tent, Heart, Users, GraduationCap, Home } from 'lucide-react'
import PhotoGallery from '@/components/PhotoGallery'

export const metadata: Metadata = {
  title: 'What We Offer | CAMPFIRE',
  description: 'Discover the comprehensive support services offered by CAMPFIRE - fitness sessions, cultural camps, mentoring, family engagement, and pathways support for Indigenous youth in Mount Isa.',
}

const services = [
  {
    title: 'Weekly Fitness & Mentoring',
    description: 'Regular structured gym sessions in Mount Isa',
    icon: Dumbbell,
    color: 'from-sunset-500 to-sunset-600',
    features: [
      '52 weekly group sessions per year',
      'Held at Brodie\'s gym in Mount Isa',
      'Blend of fitness training and group activities',
      'Build physical strength, discipline, and confidence',
      'Culturally safe environment with Indigenous leadership',
      'Peer connection and positive role modeling',
    ],
  },
  {
    title: 'Quarterly Cultural Camps',
    description: '3-day on-country immersion experiences',
    icon: Tent,
    color: 'from-earth-500 to-earth-600',
    features: [
      '4 camps over the 18-month program',
      'Led by Elders and Traditional Owners',
      'Connection to country, language, and culture',
      'Traditional practices and cultural teachings',
      'Bush tucker, fishing, and storytelling',
      'Building cultural identity and pride',
    ],
  },
  {
    title: '1-on-1 Youth Support',
    description: 'Intensive individual mentoring and advocacy',
    icon: Heart,
    color: 'from-country-500 to-country-600',
    features: [
      'Weekly individual check-ins and support',
      'Personalized Individual Support Plans (ISPs)',
      'Advocacy with schools, services, and justice system',
      'Crisis support and wraparound care',
      'Goal setting and progress tracking',
      'Referrals to specialized services when needed',
    ],
  },
  {
    title: 'Family Engagement',
    description: 'Monthly activities and connection events',
    icon: Home,
    color: 'from-sunset-600 to-earth-600',
    features: [
      'Monthly family activities and cultural events',
      'Involving parents, siblings, and extended family',
      'Strengthening family connections and communication',
      'Cultural celebrations and community gatherings',
      'Family support and resource connections',
      'Recognizing that supporting youth means supporting families',
    ],
  },
  {
    title: 'Pathways Support',
    description: 'Education and work readiness programs',
    icon: GraduationCap,
    color: 'from-earth-600 to-sunset-700',
    features: [
      'Education re-engagement support',
      'Work readiness training and job skills',
      'Life skills development',
      'Partnership connections with employers',
      'Transition support and alumni programs',
      'Creating pathways to positive futures',
    ],
  },
  {
    title: 'Community Connection',
    description: 'Building belonging and social networks',
    icon: Users,
    color: 'from-sunset-500 to-earth-600',
    features: [
      'Peer support and positive relationships',
      'Connection to community Elders and role models',
      'Cultural mentors and guest facilitators',
      'Community events and gatherings',
      'Building sense of belonging and identity',
      'Creating supportive social networks',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-earth-900 to-sunset-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-6">
              What We Offer
            </h1>
            <p className="text-xl md:text-2xl text-earth-100">
              Comprehensive, culturally grounded support for Aboriginal and Torres Strait Islander youth in Mount Isa and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="card">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-earth-900 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-country-600 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services in Action - Photo Gallery */}
      <section className="section-padding bg-gradient-to-br from-earth-100 to-sunset-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              CAMPFIRE in Action
            </h2>
            <p className="text-xl text-gray-600">
              See our services come to life through the experiences of CAMPFIRE participants.
            </p>
          </div>

          <PhotoGallery
            columns={3}
            images={[
              {
                src: '/images/services/fitness.jpg',
                alt: 'Youth training at gym session',
                caption: 'Weekly Fitness & Mentoring'
              },
              {
                src: '/images/services/cultural-camp.jpg',
                alt: 'Cultural camp activities on country',
                caption: 'Quarterly Cultural Camps'
              },
              {
                src: '/images/services/mentoring.jpg',
                alt: '1-on-1 mentoring session',
                caption: '1-on-1 Youth Support'
              },
              {
                src: '/images/services/family-event.jpg',
                alt: 'Family engagement activity',
                caption: 'Family Engagement'
              },
              {
                src: '/images/services/pathways.jpg',
                alt: 'Education and work pathways support',
                caption: 'Pathways Support'
              },
              {
                src: '/images/services/community.jpg',
                alt: 'Community connection activities',
                caption: 'Community Connection'
              },
            ]}
          />
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              A Holistic Approach
            </h2>
            <p className="text-xl text-gray-600">
              CAMPFIRE integrates all these elements to provide comprehensive, wraparound support that addresses the whole person - physical, cultural, social, educational, and familial needs.
            </p>
          </div>

          <div className="card max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-4">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl text-earth-900">
                The CAMPFIRE Difference
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-display font-bold text-lg text-earth-900 mb-3">
                  Strength-Based
                </h4>
                <p className="text-gray-600">
                  We see young people's potential first, not their challenges. Our approach builds on existing strengths and cultural resilience.
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-earth-900 mb-3">
                  Culturally Safe
                </h4>
                <p className="text-gray-600">
                  Led by Indigenous people, guided by Elders, grounded in cultural practices that honor identity and belonging.
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-earth-900 mb-3">
                  Flexible & Reliable
                </h4>
                <p className="text-gray-600">
                  We meet young people where they are, with consistent presence and adaptable support that responds to individual needs.
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-earth-900 mb-3">
                  Community-Owned
                </h4>
                <p className="text-gray-600">
                  This is our program for our people. Community members, Elders, and families shape how CAMPFIRE operates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-earth-900 mb-6 text-center">
              Who Can Participate?
            </h2>
            <div className="card">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-country-600 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    <strong>Aboriginal and Torres Strait Islander youth</strong> aged 10-17 years
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-country-600 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    <strong>Living in Mount Isa</strong> and surrounding North Queensland communities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-country-600 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    <strong>At risk</strong> of or already in contact with the youth justice system
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-country-600 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    <strong>Willing to engage</strong> in cultural, fitness, and mentoring activities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-country-600 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    <strong>Referrals accepted</strong> from family, self, schools, youth justice, police, or community services
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-sunset-600 to-earth-700 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            If you know a young person who could benefit from CAMPFIRE, or if you want to learn more about our services, get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/refer" className="btn-primary bg-white text-earth-900 hover:bg-gray-100">
              Refer a Young Person
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-earth-900">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
