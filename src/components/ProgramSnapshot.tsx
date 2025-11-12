import { Heart, Users, Tent, GraduationCap } from 'lucide-react'

const features = [
  {
    name: 'Weekly Engagement',
    description: '52 structured group sessions blending fitness, culture, and education support at our Mount Isa gym.',
    icon: Heart,
  },
  {
    name: 'Cultural Camps',
    description: 'Quarterly 3-day on-country immersion experiences led by Elders and Traditional Owners.',
    icon: Tent,
  },
  {
    name: 'Intensive Mentoring',
    description: 'Weekly 1-on-1 support with individual support plans and wraparound advocacy.',
    icon: Users,
  },
  {
    name: 'Pathways Support',
    description: 'Education re-engagement, work readiness training, and ongoing alumni support.',
    icon: GraduationCap,
  },
]

export default function ProgramSnapshot() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-earth-900 mb-4">
            What is CAMPFIRE?
          </h2>
          <p className="text-xl text-gray-600">
            An 18-month Cultural Advancement and Mentoring Program serving Aboriginal and Torres Strait Islander youth (ages 10-17) in Mount Isa and surrounding communities. Led by Brodie Germaine and guided by community Elders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.name}
                className="relative p-6 bg-gradient-to-br from-earth-50 to-sunset-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-country-100 text-country-900 rounded-lg font-semibold">
            Funded by Youth Justice Kickstarter Grant | July 2025 - February 2027
          </div>
        </div>
      </div>
    </section>
  )
}
