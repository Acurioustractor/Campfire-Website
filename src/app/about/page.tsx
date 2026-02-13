import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Target, Users, Award } from 'lucide-react'
import DescriptVideo from '@/components/DescriptVideo'
import PhotoGallery from '@/components/PhotoGallery'

export const metadata: Metadata = {
  title: 'About CAMPFIRE | Cultural Advancement and Mentoring Program',
  description: 'Learn about CAMPFIRE - an Indigenous-led youth mentoring program in Mount Isa founded by Brodie Germaine, supported by community Elders and funded by Youth Justice Kickstarter.',
}

const values = [
  {
    name: 'Cultural Strength',
    description: 'Connection to country, language, and tradition builds identity and resilience.',
    icon: Heart,
  },
  {
    name: 'Youth Empowerment',
    description: 'We see young people\'s strengths first and support their unique journey.',
    icon: Target,
  },
  {
    name: 'Community-Led',
    description: 'Elder-guided and community-owned, this is our program for our people.',
    icon: Users,
  },
  {
    name: 'Holistic Support',
    description: 'Fitness, culture, education, and family - addressing the whole person.',
    icon: Award,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-earth-900 to-sunset-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-6">
              About CAMPFIRE
            </h1>
            <p className="text-xl md:text-2xl text-earth-100">
              Cultural Advancement and Mentoring Program - Building strength through connection, culture, and community in Mount Isa.
            </p>
          </div>
        </div>
      </section>

      {/* Brodie's Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-sunset-100 text-sunset-900 rounded-full text-sm font-semibold">
                  Leadership
                </span>
              </div>
              <h2 className="font-display font-bold text-earth-900 mb-6">
                Brodie Germaine: Program Director
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Brodie Germaine is a proud Pita Pita Waka'i man from Mount Isa with deep roots in his community and a passion for empowering the next generation through cultural connection and fitness.
                </p>
                <p>
                  As the founder and director of CAMPFIRE, Brodie brings together his experience in youth work, cultural mentoring, and community leadership to create a program that truly reflects the values and needs of Mount Isa's Indigenous young people.
                </p>
                <p>
                  Under Brodie's leadership, CAMPFIRE operates out of his gym in Mount Isa, providing a culturally safe space where young people can build physical strength, connect with their culture, and access wraparound support from community Elders and mentors.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/brodie.jpg"
                alt="Brodie Germaine, CAMPFIRE Program Director"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Hear from Brodie */}
      <section className="section-padding bg-gradient-to-br from-earth-100 to-sunset-50">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              Hear from Brodie
            </h2>
            <p className="text-xl text-gray-600">
              Listen to Brodie share his vision for CAMPFIRE and why cultural connection matters.
            </p>
          </div>

          <DescriptVideo
            url="https://share.descript.com/embed/PyynfkFGD2o"
            title="Brodie's Vision for CAMPFIRE"
            description="Hear directly from Brodie about why CAMPFIRE matters and the impact of cultural connection on young people."
          />
        </div>
      </section>

      {/* Why CAMPFIRE Exists */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              Why CAMPFIRE Exists
            </h2>
            <p className="text-xl text-gray-600">
              CAMPFIRE was created to provide culturally safe, strength-based diversion for Aboriginal and Torres Strait Islander youth at risk of contact with the youth justice system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="font-display font-bold text-xl text-earth-900 mb-3">
                The Challenge
              </h3>
              <p className="text-gray-600">
                Young Indigenous people in Mount Isa face significant barriers: disconnection from culture, limited positive role models, few safe spaces, and systemic over-representation in the youth justice system.
              </p>
            </div>
            <div className="card">
              <h3 className="font-display font-bold text-xl text-earth-900 mb-3">
                Our Response
              </h3>
              <p className="text-gray-600">
                CAMPFIRE provides flexible, reliable, culturally grounded support that meets young people where they are - combining fitness, on-country camps, intensive mentoring, and family connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at CAMPFIRE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.name} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
                    {value.name}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-gradient-to-br from-sunset-600 to-earth-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-white/90">
              CAMPFIRE integrates four key elements to build holistic support for young people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl">
              <h3 className="font-display font-bold text-2xl mb-3">
                Fitness & Gym Sessions
              </h3>
              <p className="text-white/90">
                Weekly structured sessions at Brodie's gym in Mount Isa, building physical strength, discipline, and confidence in a culturally safe environment.
              </p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl">
              <h3 className="font-display font-bold text-2xl mb-3">
                On-Country Cultural Camps
              </h3>
              <p className="text-white/90">
                Quarterly 3-day immersion experiences led by Elders and Traditional Owners, reconnecting young people to land, language, and cultural practices.
              </p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl">
              <h3 className="font-display font-bold text-2xl mb-3">
                Intensive Mentoring
              </h3>
              <p className="text-white/90">
                Weekly 1-on-1 support with individual support plans, advocacy, and wraparound care addressing education, family, and wellbeing needs.
              </p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl">
              <h3 className="font-display font-bold text-2xl mb-3">
                Family Connection
              </h3>
              <p className="text-white/90">
                Monthly family activities and cultural events, recognizing that supporting young people means supporting their whole family system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              Program Timeline
            </h2>
            <p className="text-xl text-gray-600">
              CAMPFIRE is an 18-month program running from July 2025 to February 2027, funded by the Youth Justice Kickstarter Grant.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="inline-block px-4 py-2 bg-sunset-100 text-sunset-900 rounded-full text-sm font-semibold">
                  July 2025
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
                  Program Launch
                </h3>
                <p className="text-gray-600">
                  CAMPFIRE officially begins, with initial youth intake, Elder consultations, and weekly gym sessions commencing.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="inline-block px-4 py-2 bg-sunset-100 text-sunset-900 rounded-full text-sm font-semibold">
                  2025-2027
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
                  Active Program Delivery
                </h3>
                <p className="text-gray-600">
                  52 weekly sessions, 4 quarterly cultural camps, ongoing 1-on-1 mentoring, monthly family activities, and pathways support.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="inline-block px-4 py-2 bg-sunset-100 text-sunset-900 rounded-full text-sm font-semibold">
                  Feb 2027
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
                  Program Completion & Sustainability
                </h3>
                <p className="text-gray-600">
                  Initial 18-month program concludes with evaluation, alumni support transition, and planning for ongoing sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Photo Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Glimpses from CAMPFIRE's journey - building connections, celebrating culture, and creating pathways.
            </p>
          </div>

          <PhotoGallery
            columns={2}
            images={[
              {
                src: '/images/Gallery/IMG_0900.jpg',
                alt: 'CAMPFIRE program activities',
                caption: 'Program Launch - July 2025'
              },
              {
                src: '/images/Gallery/IMG_2652.jpg',
                alt: 'First cultural camp on country',
                caption: 'First Cultural Camp on Country'
              },
              {
                src: '/images/Gallery/Confit_Mount_Isa_Day_1_Morning (31 of 64).jpg',
                alt: 'Community gathering with Elders',
                caption: 'Community Gathering with Elders'
              },
              {
                src: '/images/Gallery/IMG_4557.jpg',
                alt: 'Youth celebrating milestones',
                caption: 'Celebrating Youth Achievements'
              },
            ]}
          />
        </div>
      </section>

      {/* Acknowledgments */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              Acknowledgments
            </h2>
            <p className="text-gray-600 mb-8">
              CAMPFIRE is funded by the Queensland Government's Youth Justice Kickstarter Grant. We acknowledge and thank the Traditional Owners, Elders, and community members who guide and support this program, with program support and storytelling from A Curious Tractor.
            </p>
            <p className="text-gray-600 mb-8">
              <Link href="/elders" className="text-sunset-600 font-semibold hover:text-sunset-700 transition-colors">
                Meet our Elders &rarr;
              </Link>
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-6 py-4 bg-white rounded-lg shadow-md">
                <p className="font-semibold text-earth-900">Youth Justice Kickstarter</p>
              </div>
              <div className="px-6 py-4 bg-white rounded-lg shadow-md">
                <p className="font-semibold text-earth-900">A Curious Tractor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-sunset-600 to-earth-700 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold mb-6">
            Want to Support CAMPFIRE?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            There are many ways to get involved - from referring a young person to partnering with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/refer" className="btn-primary bg-white text-earth-900 hover:bg-gray-100">
              Refer a Young Person
            </Link>
            <Link href="/partnerships" className="btn-outline border-white text-white hover:bg-white hover:text-earth-900">
              Explore Partnerships
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
