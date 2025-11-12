import type { Metadata } from 'next'
import ReferralForm from '@/components/ReferralForm'
import { Users, Heart, Check, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refer a Young Person | CAMPFIRE',
  description: 'Refer an Aboriginal or Torres Strait Islander young person (ages 10-17) to CAMPFIRE. We provide culturally safe support through fitness, cultural camps, and mentoring.',
}

const referralPathways = [
  {
    title: 'Family Referral',
    description: 'Parents, guardians, and family members can refer a young person directly.',
    icon: Heart,
  },
  {
    title: 'Self-Referral',
    description: 'Young people can refer themselves if they want to participate.',
    icon: Users,
  },
  {
    title: 'Service Referral',
    description: 'Schools, youth justice, police, and community services can make referrals.',
    icon: Check,
  },
]

const whatHappensNext = [
  'We receive your referral and review the information provided',
  'A CAMPFIRE team member contacts the parent/guardian within 2-3 business days',
  'We arrange a meeting to discuss the program and answer questions',
  'If suitable, we complete intake paperwork and cultural safety checks',
  'Young person is welcomed into CAMPFIRE and begins their journey',
]

export default function ReferPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-earth-900 to-sunset-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-6">
              Refer a Young Person
            </h1>
            <p className="text-xl md:text-2xl text-earth-100">
              Know an Aboriginal or Torres Strait Islander young person (ages 10-17) who could benefit from cultural connection, mentoring, and community support?
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              Who Can Benefit from CAMPFIRE?
            </h2>
            <p className="text-xl text-gray-600">
              CAMPFIRE is designed for young people who are:
            </p>
          </div>

          <div className="max-w-3xl mx-auto card">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-country-600 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  <strong>Aboriginal and/or Torres Strait Islander</strong> youth aged 10-17 years
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-country-600 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  <strong>At risk of</strong> or already in contact with the youth justice system
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-country-600 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  Looking for <strong>positive role models</strong> and cultural connection
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-country-600 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  Interested in <strong>fitness, cultural activities</strong>, and personal development
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-country-600 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  Ready to engage in a <strong>culturally safe, supportive program</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Referral Pathways */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              Who Can Make a Referral?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {referralPathways.map((pathway) => {
              const Icon = pathway.icon
              return (
                <div key={pathway.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
                    {pathway.title}
                  </h3>
                  <p className="text-gray-600">
                    {pathway.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="text-center text-gray-600">
            <p>
              We welcome referrals from parents, family, schools, youth justice officers, police, community services, and young people themselves.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              What Happens After You Refer?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {whatHappensNext.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-grow pt-1">
                  <p className="text-gray-600">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              Submit a Referral
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below to refer a young person to CAMPFIRE. All information is kept confidential.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ReferralForm />
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="section-padding bg-gradient-to-br from-sunset-600 to-earth-700 text-white">
        <div className="container-custom text-center">
          <Phone className="h-12 w-12 mx-auto mb-4" />
          <h2 className="font-display font-bold mb-4">
            Prefer to Talk to Someone?
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            We understand that some situations are easier to discuss over the phone. Feel free to call us directly.
          </p>
          <div className="space-y-2">
            <p className="text-lg">
              <strong>Phone:</strong> (Contact number to be added)
            </p>
            <p className="text-lg">
              <strong>Email:</strong> info@campfire.org.au
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
