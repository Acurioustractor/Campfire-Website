import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { getBlogPosts } from '@/lib/notion'
import { getELStories } from '@/lib/empathy-ledger'

export const metadata: Metadata = {
  title: 'Our Stories | CAMPFIRE',
  description: 'Read stories from CAMPFIRE youth, Elders, families, and partners. Real voices sharing their journey of cultural connection, growth, and community support.',
}

// Revalidate every hour to fetch new stories from Notion
export const revalidate = 3600

const categories = [
  { name: 'All Stories', slug: 'all' },
  { name: 'Youth Stories', slug: 'youth-stories' },
  { name: 'Elder Voices', slug: 'elder-voices' },
  { name: 'Camp Updates', slug: 'camp-updates' },
  { name: 'News', slug: 'news' },
]

// Static stories (before Notion setup or alongside Notion posts)
const staticStories = [
  {
    id: 'brodie-journey',
    title: 'My Journey: From Struggle to Strength',
    slug: 'my-journey-brodie-germaine',
    publishedDate: '2024-11-13',
    category: 'Elder Voices',
    featuredImage: '/images/brodie.jpg',
    author: 'Brodie Germaine',
    excerpt: 'I\'m Brodie Germaine, a Kalkadoon man from Mount Isa. This is my story - from football scholarships to addiction, to finding healing through cultural reconnection, and now dedicating my life to supporting young people through CAMPFIRE.',
  },
  {
    id: 'naidoc-2024',
    title: 'Community Comes Together: Mount Isa NAIDOC Week Celebrations',
    slug: 'mount-isa-naidoc-week-2024',
    publishedDate: '2024-11-13',
    category: 'News',
    featuredImage: '/images/Gallery/20250711-IMG_8846.jpg',
    author: 'CAMPFIRE Team',
    excerpt: 'Every year, the Mount Isa community gathers to celebrate NAIDOC Week with a powerful march and community feed. This year, we spoke with Elders, youth workers, and community members about what NAIDOC means to them and how we\'re supporting the next generation.',
  }
]

export default async function StoriesPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const selectedCategory = searchParams.category || 'all'

  // Fetch stories from Notion and Empathy Ledger
  const [notionStories, elStories] = await Promise.all([
    getBlogPosts(),
    getELStories(),
  ])

  // Map EL stories to the same shape as static/Notion stories
  const mappedELStories = elStories.map(s => ({
    id: s.id,
    title: s.title,
    slug: s.id, // EL stories don't have slugs — use id
    publishedDate: s.publishedAt,
    category: s.themes[0]?.name || 'Community',
    featuredImage: '',
    author: s.authorName,
    excerpt: s.summary,
  }))

  // Combine: static first, then Notion, then EL
  const allStories = [...staticStories, ...notionStories, ...mappedELStories]

  // Filter by category if specified
  const stories = selectedCategory === 'all'
    ? allStories
    : allStories.filter(story =>
        story.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      )

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-earth-900 to-sunset-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-6">
              Our Stories
            </h1>
            <p className="text-xl md:text-2xl text-earth-100">
              Real voices from our community - youth, Elders, families, and partners sharing their CAMPFIRE journey.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/stories?category=${category.slug}`}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.slug
                    ? 'bg-sunset-600 text-white'
                    : 'bg-earth-100 text-earth-900 hover:bg-earth-200'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          {stories.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No stories yet in this category. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <article key={story.id} className="card group">
                  {/* Featured Image */}
                  {story.featuredImage ? (
                    <div className="mb-4 h-48 bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={story.featuredImage}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 h-48 bg-gradient-to-br from-earth-200 to-sunset-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500 text-sm text-center px-4">
                        Story image
                      </p>
                    </div>
                  )}

                  {/* Category and date */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      <span>{story.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {story.publishedDate
                          ? new Date(story.publishedDate).toLocaleDateString('en-AU', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })
                          : 'Date TBD'}
                      </span>
                    </div>
                  </div>

                  {/* Title and excerpt */}
                  <h3 className="font-display font-bold text-xl text-earth-900 mb-2 group-hover:text-sunset-600 transition-colors">
                    <Link href={`/stories/${story.slug}`}>
                      {story.title}
                    </Link>
                  </h3>

                  {story.excerpt && (
                    <p className="text-gray-600 mb-4">
                      {story.excerpt}
                    </p>
                  )}

                  {/* Author */}
                  {story.author && (
                    <p className="text-sm text-gray-500 mb-4">
                      By {story.author}
                    </p>
                  )}

                  {/* Read more link */}
                  <Link
                    href={`/stories/${story.slug}`}
                    className="inline-flex items-center text-sunset-600 font-semibold hover:text-sunset-700 transition-colors group/link"
                  >
                    Read Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-sunset-600 to-earth-700 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold mb-6">
            Want to Share Your Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            CAMPFIRE participants and community members are invited to share their experiences. Contact us to learn more.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-earth-900 hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
