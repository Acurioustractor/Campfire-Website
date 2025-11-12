import type { Stat } from '@/types'

const stats: Stat[] = [
  {
    value: '10-17',
    label: 'Age Range',
    description: 'Youth served by the program',
  },
  {
    value: '52',
    label: 'Weekly Sessions',
    description: 'Structured group activities per year',
  },
  {
    value: '4',
    label: 'Cultural Camps',
    description: 'Quarterly on-country experiences',
  },
  {
    value: '18',
    label: 'Months',
    description: 'Program duration',
  },
]

export default function ImpactStats() {
  return (
    <section className="section-padding bg-gradient-to-br from-sunset-600 to-earth-700 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-white/90">
            Building cultural strength and resilience through connection, mentorship, and community support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <div className="font-display font-bold text-4xl md:text-5xl mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-white/90 italic max-w-3xl mx-auto">
            "CAMPFIRE is community-owned and Elder-guided. We see young people's strength first, and use culture and connection as the foundation of healing."
          </p>
          <p className="mt-4 font-semibold">
            — Brodie Germaine, Program Director
          </p>
        </div>
      </div>
    </section>
  )
}
