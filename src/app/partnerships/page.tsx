import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, Briefcase, Heart, GraduationCap, DollarSign, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partnerships | CAMPFIRE',
  description: 'Partner with CAMPFIRE to support Indigenous youth in Mount Isa. Opportunities for cultural educators, employers, funders, and community organizations.',
}

const partnershipOpportunities = [
  {
    title: 'Cultural Educators & Facilitators',
    description: 'Share traditional knowledge and cultural practices',
    icon: Users,
    opportunities: [
      'Lead cultural workshops and storytelling sessions',
      'Facilitate on-country camps with Elders',
      'Teach traditional skills (bush tucker, language, art)',
      'Guest speaking at youth sessions',
    ],
  },
  {
    title: 'Sports Mentors & Role Models',
    description: 'Inspire through fitness and personal development',
    icon: Heart,
    opportunities: [
      'Co-facilitate gym sessions and fitness activities',
      'Share your journey and experiences with youth',
      'Provide sports mentoring and coaching',
      'Participate in community events',
    ],
  },
  {
    title: 'Employment Pathway Providers',
    description: 'Create work opportunities and skills development',
    icon: Briefcase,
    opportunities: [
      'Offer work experience placements',
      'Provide job skills training and mentoring',
      'Create pathways to employment',
      'Support career exploration activities',
    ],
  },
  {
    title: 'Education Partners',
    description: 'Support learning and school engagement',
    icon: GraduationCap,
    opportunities: [
      'Collaborate on education support programs',
      'Facilitate school re-engagement',
      'Provide tutoring and learning support',
      'Create pathways for further education',
    ],
  },
  {
    title: 'Funding Partners',
    description: 'Enable program sustainability and growth',
    icon: DollarSign,
    opportunities: [
      'Support program operations beyond 2027',
      'Fund specific initiatives (camps, equipment, transport)',
      'Sponsor youth participation',
      'Enable program expansion',
    ],
  },
  {
    title: 'In-Kind Support',
    description: 'Donate resources and equipment',
    icon: Package,
    opportunities: [
      'Gym and sports equipment',
      'Camping and outdoor gear',
      'Transport and logistics support',
      'Technology and educational resources',
    ],
  },
]

const currentPartners = [
  {
    name: 'Youth Justice Queensland',
    description: 'Program funding through Kickstarter Grant',
  },
  {
    name: 'A Curious Tractor',
    description: 'Auspice partner and program support',
  },
  {
    name: 'Traditional Owners',
    description: 'Cultural guidance and on-country access',
  },
  {
    name: 'Community Elders',
    description: 'Cultural mentoring and leadership',
  },
]

export default function PartnershipsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-earth-900 to-sunset-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-6">
              Partnerships
            </h1>
            <p className="text-xl md:text-2xl text-earth-100">
              Join us in supporting Indigenous youth through cultural connection, mentoring, and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              Current Partners
            </h2>
            <p className="text-xl text-gray-600">
              CAMPFIRE is grateful to work alongside these organizations and community groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {currentPartners.map((partner) => (
              <div key={partner.name} className="card">
                <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              Ways to Partner
            </h2>
            <p className="text-xl text-gray-600">
              There are many ways to contribute your skills, resources, and expertise to CAMPFIRE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipOpportunities.map((opportunity) => {
              const Icon = opportunity.icon
              return (
                <div key={opportunity.title} className="card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-earth-900">
                      {opportunity.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {opportunity.description}
                  </p>

                  <ul className="space-y-2">
                    {opportunity.opportunities.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-country-600 mt-0.5"
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
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              Why Partner with CAMPFIRE?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
                Community Impact
              </h3>
              <p className="text-gray-600">
                Make a tangible difference in the lives of Indigenous youth and families in Mount Isa.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
                Cultural Connection
              </h3>
              <p className="text-gray-600">
                Be part of a program that honors and celebrates Indigenous culture and community strength.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
                Long-term Change
              </h3>
              <p className="text-gray-600">
                Contribute to breaking cycles and creating positive pathways for the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry CTA */}
      <section className="section-padding bg-gradient-to-br from-sunset-600 to-earth-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold mb-6">
              Interested in Partnering?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We'd love to hear from you. Get in touch to discuss how we can work together to support Indigenous youth in Mount Isa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?type=partnership" className="btn-primary bg-white text-earth-900 hover:bg-gray-100">
                Submit Partnership Inquiry
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-earth-900">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
