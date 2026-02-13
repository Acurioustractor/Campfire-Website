import type { Metadata } from 'next'
import Link from 'next/link'
import { getELElders } from '@/lib/empathy-ledger'

export const metadata: Metadata = {
  title: 'Our Elders | CAMPFIRE',
  description: 'Meet the Elders who guide CAMPFIRE — sharing cultural knowledge, wisdom, and support for the next generation in Mount Isa.',
}

export const revalidate = 3600

export default async function EldersPage() {
  const elders = await getELElders()

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-earth-900 to-sunset-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-6">
              Our Elders
            </h1>
            <p className="text-xl md:text-2xl text-earth-100">
              CAMPFIRE is guided by respected Elders and cultural leaders who share their knowledge, wisdom, and connection to country with the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Elder Profiles */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          {elders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {elders.map((elder) => (
                <div key={elder.id} className="card text-center">
                  {/* Avatar */}
                  <div className="mb-6 flex justify-center">
                    {elder.avatarUrl ? (
                      <img
                        src={elder.avatarUrl}
                        alt={elder.displayName}
                        className="w-32 h-32 rounded-full object-cover shadow-lg"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sunset-400 to-earth-500 flex items-center justify-center shadow-lg">
                        <span className="text-white font-display font-bold text-3xl">
                          {elder.displayName.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="font-display font-bold text-xl text-earth-900 mb-2">
                    {elder.displayName}
                  </h3>

                  {/* Cultural background */}
                  {elder.culturalBackground && elder.culturalBackground.length > 0 && (
                    <p className="text-sm text-sunset-700 font-semibold mb-3">
                      {elder.culturalBackground.join(' · ')}
                    </p>
                  )}

                  {/* Bio */}
                  {elder.bio && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {elder.bio}
                    </p>
                  )}

                  {/* Story count */}
                  {elder.storyCount > 0 && (
                    <p className="mt-4 text-xs text-gray-400">
                      {elder.storyCount} {elder.storyCount === 1 ? 'story' : 'stories'} shared
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Empty state — graceful fallback */
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-sunset-400 to-earth-500 flex items-center justify-center">
                <span className="text-white text-3xl">🔥</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-earth-900 mb-4">
                Elder Profiles Coming Soon
              </h2>
              <p className="text-gray-600 mb-4">
                We are working with our Elders to share their stories and cultural knowledge here. CAMPFIRE is guided by respected community leaders including Uncle Warren King and Uncle George.
              </p>
              <p className="text-gray-600">
                Check back soon as we continue to build this page with their guidance and permission.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Context Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-earth-900 mb-6">
              The Role of Elders in CAMPFIRE
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Elders are at the heart of CAMPFIRE. They guide the cultural components of the program, lead on-country camps, and provide the cultural authority and wisdom that makes this program authentic and effective.
              </p>
              <p>
                Through quarterly cultural camps and regular guidance, our Elders help young people connect with their identity, learn traditional practices, and build the cultural strength that supports their wellbeing and resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-sunset-600 to-earth-700 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold mb-6">
            Learn More About CAMPFIRE
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how CAMPFIRE brings together Elders, mentors, and community to support young people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary bg-white text-earth-900 hover:bg-gray-100">
              About CAMPFIRE
            </Link>
            <Link href="/stories" className="btn-outline border-white text-white hover:bg-white hover:text-earth-900">
              Read Our Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
