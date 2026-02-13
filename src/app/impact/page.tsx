import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Heart, Users, Flame, Mountain, BookOpen, GraduationCap, Home, Star,
} from 'lucide-react'
import {
  getELStorytellers,
  getELProjectAnalysis,
  getELThemes,
} from '@/lib/empathy-ledger'
import PhotoGallery from '@/components/PhotoGallery'

export const metadata: Metadata = {
  title: 'Our Impact | CAMPFIRE',
  description:
    'See the impact of CAMPFIRE — real voices from the community alongside program outcomes. Youth fitness, cultural camps, mentoring, and community connection in Mount Isa.',
}

export const revalidate = 3600

// --- Static program data ---

const programs = [
  {
    name: 'BG Fit Gym',
    description:
      'Weekly fitness sessions at Brodie\'s gym in Mount Isa. A culturally safe space where young people build physical strength, discipline, and confidence.',
    image: '/images/Gallery/Confit_Mount_Isa_Day_1_Morning (31 of 64).jpg',
    metric: '3 sessions/week',
  },
  {
    name: 'Camping on Country',
    description:
      'Quarterly cultural immersion camps led by Elders and Traditional Owners. Young people reconnect with land, language, and cultural practices.',
    image: '/images/Gallery/IMG_0900.jpg',
    metric: '4 camps/year',
  },
  {
    name: 'School Engagement',
    description:
      'Working with local Mount Isa schools to provide in-school mentoring, cultural education, and positive role models for students.',
    image: '/images/Gallery/IMG_7407.jpg',
    metric: '500+ kids/week',
  },
  {
    name: 'NAIDOC & Community Events',
    description:
      'Leading and supporting community cultural celebrations that bring families together and strengthen cultural pride across generations.',
    image: '/images/Gallery/20250711-IMG_8846.jpg',
    metric: 'Annual events',
  },
  {
    name: 'Youth Mentorship',
    description:
      'One-on-one and group mentoring with individual support plans, advocacy, and wraparound care addressing education, family, and wellbeing.',
    image: '/images/Gallery/20250410-IMG_4246.jpg',
    metric: '15+ young people',
  },
  {
    name: 'Kickstarter Program',
    description:
      'Structured 18-month youth development program funded by Queensland\'s Youth Justice Kickstarter Grant, running July 2025 to February 2027.',
    image: '/images/Gallery/IMG_0986.jpg',
    metric: '18-month program',
  },
]

const serviceMetrics = [
  { label: 'Young People Engaged', value: '15+', sub: 'active participants' },
  { label: 'Schools Partnered', value: '4', sub: 'Mount Isa schools' },
  { label: 'Cultural Camps', value: '4', sub: 'per year on country' },
  { label: 'Gym Sessions', value: '3', sub: 'per week' },
  { label: 'Community Voices', value: '15', sub: 'storytellers recorded' },
  { label: 'Kids Reached Weekly', value: '500+', sub: 'across school programs' },
]

const almaLabels: Record<string, string> = {
  authority: 'Community Empowerment',
  lived_experience: 'Healing & Growth',
  safety_indicators: 'Safe Spaces',
  community_evidence: 'Relationships',
  cultural_knowledge: 'Cultural Continuity',
}

// Clean verbal fillers from transcript quotes for readability
function cleanQuoteText(text: string): string {
  let cleaned = text
    // Remove filler words: "uh," "um," "uh" "um" (with optional comma/space)
    .replace(/,?\s*\b[Uu]h\b,?\s*/g, ' ')
    .replace(/,?\s*\b[Uu]m\b,?\s*/g, ' ')
    // Remove filler phrases
    .replace(/,?\s*you know,?\s*/g, ' ')
    .replace(/,?\s*I suppose,?\s*/g, ' ')
    .replace(/,?\s*I think I\.\s*/g, ' ')
    // Remove standalone "like" as filler (not "like this" or "I like")
    .replace(/,\s*like,\s*/g, ', ')
    // Clean repeated commas and spaces
    .replace(/,\s*,/g, ',')
    .replace(/\s{2,}/g, ' ')
    .replace(/,\s*\./g, '.')
    .replace(/\.\s*\./g, '.')
    .trim()

  // Ensure first letter is capitalised
  if (cleaned.length > 0) {
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
  }

  return cleaned
}

// --- Page ---

export default async function ImpactPage() {
  const [storytellers, analysis, themes] = await Promise.all([
    getELStorytellers(),
    getELProjectAnalysis(),
    getELThemes(),
  ])

  // Short context lines tying each voice back to CAMPFIRE / Brodie
  const contextOverrides: Record<string, string> = {
    'Uncle George': 'Elder and school facilitator working alongside CAMPFIRE',
    'Uncle Warren King': 'Elder whose legacy of cultural leadership inspires CAMPFIRE',
    'Aunty Ivy': 'Elder and cultural pride advocate supporting CAMPFIRE youth',
    'Brodie Germaine': 'CAMPFIRE founder and program director',
    'Danielle Germaine': 'Speaking about the cultural values Brodie was raised with',
    'Gracie Ryder': 'Youth police liaison on Brodie\'s impact in Mount Isa',
    'Nigel': 'Youth sport coordinator partnering with Brodie on country trips',
    'Ben': 'Youth worker at CAMPFIRE creating safe spaces',
    'Jay': 'Young person on CAMPFIRE\'s on-country camps',
    'Benji - Young Person': 'Young person on Brodie\'s community connections',
    'Luigi': 'Young person training at BG Fit gym',
    'Nayden': 'Young person connecting to country through CAMPFIRE',
    'Rashad Gavin Isaacson': 'Young person sharing culture through CAMPFIRE',
    'Siva': 'Case worker supporting CAMPFIRE youth',
    'YPA Team': 'Youth program alliance working with CAMPFIRE',
  }

  // Build diverse quotes — one best quote per storyteller, with avatar
  // Prioritize: Elders, quotes mentioning Brodie/CAMPFIRE/country, shorter quotes
  const programKeywords = /brodie|campfire|on country|camping|culture|gym|fitness/i
  const diverseQuotes = storytellers
    .filter((s) => s.quotes && s.quotes.length > 0 && s.avatarUrl)
    .map((s) => {
      // Clean name (remove trailing periods)
      const name = s.displayName.replace(/\.\s*$/, '')

      // Preferred quotes for specific storytellers — pick quotes that connect to CAMPFIRE themes
      const preferredQuotes: Record<string, RegExp> = {
        'Uncle Warren King': /young leaders|fires burning/i,
        'Benji - Young Person': /black people|brodie|half of/i,
        'Jay': /bush|fun at bush|can't get in trouble/i,
        'Rashad Gavin Isaacson': /culture|show them their culture|bring up/i,
        'Nayden': /mother nature|connect/i,
        'Luigi': /gym|muscles|big muscles/i,
      }
      const preferPattern = preferredQuotes[name] || preferredQuotes[s.displayName]

      // Score each quote: prefer short, program-relevant quotes
      const isBrodie = /brodie/i.test(name)
      const scored = s.quotes.map((q) => {
        let score = q.impactScore
        if (preferPattern && preferPattern.test(q.text)) score += 10
        if (programKeywords.test(q.text)) score += 3
        // Extra boost for others mentioning Brodie by name
        if (!isBrodie && /brodie/i.test(q.text)) score += 5
        if (q.text.length < 200) score += 2
        if (q.text.length > 400) score -= 2
        return { ...q, totalScore: score }
      })
      const best = scored.sort((a, b) => b.totalScore - a.totalScore)[0]
      const isYouth = /young person|jay|benji|luigi|nayden|rashad/i.test(s.displayName)
      return {
        text: cleanQuoteText(best.text),
        context: contextOverrides[name] || contextOverrides[s.displayName] || '',
        impactScore: best.impactScore,
        storytellerName: name,
        avatarUrl: s.avatarUrl,
        isElder: s.elderStatus || /uncle|aunty/i.test(s.displayName),
        isYouth,
      }
    })
    // Sort: Elders first, then young people, then others
    .sort((a, b) => {
      if (a.isElder !== b.isElder) return a.isElder ? -1 : 1
      if (a.isYouth !== b.isYouth) return a.isYouth ? -1 : 1
      return b.impactScore - a.impactScore
    })

  // ALMA signals
  const alma = analysis?.almaSignals ?? null

  // Normalize and group themes into meaningful categories
  const themeGroups: { label: string; Icon: typeof Heart; keywords: RegExp }[] = [
    { label: 'Community Connection', Icon: Users, keywords: /community.*(connection|spirit|gathering|support|engagement|collaboration|participation)|connection.*community/i },
    { label: 'Cultural Pride & Identity', Icon: Flame, keywords: /cultur.*(pride|identity|celebration|expression|grounding|dance|practices)|naidoc|cultural_identity/i },
    { label: 'Youth Engagement', Icon: Heart, keywords: /youth.*(engagement|empowerment|support|mentorship|leadership|fitness|boredom)|young people|crime diversion/i },
    { label: 'Mentorship & Role Models', Icon: Star, keywords: /mentor|role model|leading by example|trust.*mentor|positive role/i },
    { label: 'On Country & Healing', Icon: Mountain, keywords: /country|on.country|bush|healing|trauma|holistic wellbeing|safe space/i },
    { label: 'Education & Sport', Icon: GraduationCap, keywords: /education|school|sport|fitness|physical activity/i },
    { label: 'Family & Belonging', Icon: Home, keywords: /family|kinship|belonging|mother|intergenerational|elder/i },
    { label: 'Storytelling & Knowledge', Icon: BookOpen, keywords: /storytelling|knowledge|language|listening/i },
  ]

  // Count how many raw themes match each group
  const groupedThemes = themeGroups.map((g) => {
    const matchCount = themes.reduce((sum, t) => {
      if (t.count > 0 && g.keywords.test(t.name)) return sum + t.count
      return sum
    }, 0)
    return { ...g, count: matchCount }
  }).filter((g) => g.count > 0).sort((a, b) => b.count - a.count)

  return (
    <>
      {/* Hero */}
      <section className="relative section-padding bg-gradient-to-br from-earth-900 via-earth-800 to-sunset-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/Gallery/20250410-IMG_4319.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-6">
              Impact Through Community
            </h1>
            <p className="text-xl md:text-2xl text-earth-100 mb-8">
              Real voices from the Mount Isa community alongside the programs
              making a difference. CAMPFIRE combines cultural strength with
              practical support to create lasting change.
            </p>
            {analysis && (
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-sunset-300 font-bold text-2xl">
                  {analysis.storytellerCount}
                </span>
                <span className="text-earth-200">
                  community voices recorded across{' '}
                  {analysis.transcriptCount} conversations
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What CAMPFIRE delivers on the ground in Mount Isa, week after week.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {serviceMetrics.map((m) => (
              <div
                key={m.label}
                className="text-center p-6 rounded-xl bg-earth-50"
              >
                <div className="font-display font-bold text-3xl text-sunset-600 mb-1">
                  {m.value}
                </div>
                <div className="font-semibold text-earth-900 text-sm mb-1">
                  {m.label}
                </div>
                <div className="text-xs text-gray-500">{m.sub}</div>
              </div>
            ))}
          </div>

          {/* ALMA Impact Dimensions */}
          {alma && Object.keys(alma).length > 0 && (
            <div className="max-w-3xl mx-auto">
              <h3 className="font-display font-bold text-xl text-earth-900 mb-6 text-center">
                Community Impact Dimensions
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Measured through ALMA — Adaptive Listening and Meaning Analysis of community conversations.
              </p>
              <div className="space-y-4">
                {Object.entries(alma).map(([key, value]) => {
                  const pct =
                    typeof value === 'number'
                      ? Math.round(value * 100)
                      : 0
                  return (
                    <div key={key}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-semibold text-earth-900">
                          {almaLabels[key] || key}
                        </span>
                        <span className="text-sm font-bold text-sunset-600">
                          {pct}%
                        </span>
                      </div>
                      <div className="w-full bg-earth-100 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-sunset-500 to-earth-500 h-3 rounded-full transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Community Voices */}
      <section className="section-padding bg-gradient-to-br from-earth-100 to-sunset-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              Community Voices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elders, youth, mentors, and families share what cultural connection and community support means to them.
            </p>
          </div>

          {diverseQuotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {diverseQuotes.map((q, i) => (
                <blockquote
                  key={i}
                  className={`card relative ${i === 0 ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    {q.avatarUrl && (
                      <img
                        src={q.avatarUrl}
                        alt={q.storytellerName}
                        className={`rounded-full object-cover shadow-md flex-shrink-0 ${
                          i === 0 ? 'w-16 h-16' : 'w-12 h-12'
                        }`}
                      />
                    )}
                    <div className="min-w-0">
                      <div className="text-sunset-400 text-3xl font-serif leading-none mb-1">
                        &ldquo;
                      </div>
                      <p
                        className={`text-earth-900 leading-relaxed mb-3 ${
                          i === 0 ? 'text-lg' : 'text-base'
                        }`}
                      >
                        {q.text}
                      </p>
                      <footer>
                        <div className="font-semibold text-sm text-earth-900">
                          {q.storytellerName}
                        </div>
                        {q.context && (
                          <div className="text-xs text-gray-500 mt-0.5">{q.context}</div>
                        )}
                      </footer>
                    </div>
                  </div>
                </blockquote>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-8">
              <p className="text-gray-600 text-lg">
                Community voice recordings are being collected and will appear
                here as they are published. CAMPFIRE is actively documenting
                stories from Elders, youth, and families.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Six interconnected programs delivering culturally grounded support
              across fitness, culture, education, and mentoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog) => (
              <div key={prog.name} className="card group overflow-hidden p-0">
                <div className="h-48 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-lg text-earth-900">
                      {prog.name}
                    </h3>
                    <span className="text-xs font-bold text-sunset-600 bg-sunset-50 px-3 py-1 rounded-full">
                      {prog.metric}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{prog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes */}
      {groupedThemes.length > 0 && (
        <section className="section-padding bg-earth-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-earth-900 mb-4">
                What CAMPFIRE Young People & Supporters Talk About
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Key themes from {analysis?.transcriptCount || 18} community conversations across {analysis?.storytellerCount || 15} voices.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {groupedThemes.map((g) => {
                const maxCount = groupedThemes[0].count
                const barWidth = Math.max(20, Math.round((g.count / maxCount) * 100))
                const IconComp = g.Icon
                return (
                  <div key={g.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-3">
                      <IconComp className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-earth-900 mb-2">
                      {g.label}
                    </h3>
                    <div className="w-full bg-earth-200 rounded-full h-2 mx-auto">
                      <div
                        className="bg-gradient-to-r from-sunset-500 to-earth-500 h-2 rounded-full"
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {g.count} mention{g.count !== 1 ? 's' : ''}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Reflections from Camp */}
      <section className="section-padding bg-gradient-to-br from-earth-100 to-sunset-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-earth-900 mb-4">
              Reflections from Camp
            </h2>
            <p className="text-xl text-gray-600">
              Moments from Camping on Country — where cultural connection, land,
              and community come together.
            </p>
          </div>

          <PhotoGallery
            columns={3}
            images={[
              {
                src: '/images/Gallery/20250410-IMG_4167.jpg',
                alt: 'Young people swimming at the waterhole on country',
                caption: 'Swimming at the Waterhole',
              },
              {
                src: '/images/Gallery/20250410-IMG_4246.jpg',
                alt: 'Young people geared up with backpacks ready to explore country',
                caption: 'Geared Up for Country',
              },
              {
                src: '/images/Gallery/20250410-IMG_4319.jpg',
                alt: 'Brodie mentoring a young person with camera on country',
                caption: 'Mentoring on Country',
              },
              {
                src: '/images/Gallery/20250410-IMG_4270.jpg',
                alt: 'Young person exploring the bush among the gum trees',
                caption: 'Telling stories and learning how to use equipment',
              },
              {
                src: '/images/Gallery/20250410-IMG_4544.jpg',
                alt: 'Kids playing in the water with dog on country',
                caption: 'Joy on Country',
              },
              {
                src: '/images/Gallery/20250711-IMG_8846.jpg',
                alt: 'The whole CAMPFIRE crew — group photo at camp',
                caption: 'Brodie and his Mum at the NAIDOC march',
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-sunset-600 to-earth-700 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold mb-6">
            Be Part of the Impact
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re referring a young person, partnering with us, or
            sharing your story — every contribution strengthens community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/refer"
              className="btn-primary bg-white text-earth-900 hover:bg-gray-100"
            >
              Refer a Young Person
            </Link>
            <Link
              href="/partnerships"
              className="btn-outline border-white text-white hover:bg-white hover:text-earth-900"
            >
              Explore Partnerships
            </Link>
            <Link
              href="/stories"
              className="btn-outline border-white text-white hover:bg-white hover:text-earth-900"
            >
              Read Our Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
