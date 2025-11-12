import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

// Mock data for now - will be replaced with Notion API data
const stories = [
  {
    id: '1',
    title: 'First Cultural Camp: Connection to Country',
    excerpt: 'Our first quarterly camp brought together youth, Elders, and Traditional Owners for three days of cultural learning on country.',
    category: 'Camp Updates',
    publishedDate: '2025-08-15',
    slug: 'first-cultural-camp',
    featuredImage: '',
  },
  {
    id: '2',
    title: "Jordan's Journey: From Struggle to Strength",
    excerpt: 'How one young person found their path through fitness, culture, and community connection at CAMPFIRE.',
    category: 'Youth Stories',
    publishedDate: '2025-08-10',
    slug: 'jordans-journey',
    featuredImage: '',
  },
  {
    id: '3',
    title: 'Elder Voices: Why Cultural Mentoring Matters',
    excerpt: 'Community Elders share their wisdom on the importance of passing down cultural knowledge to the next generation.',
    category: 'Elder Voices',
    publishedDate: '2025-08-05',
    slug: 'elder-voices-cultural-mentoring',
    featuredImage: '',
  },
]

export default function LatestStories() {
  return (
    <section className="section-padding bg-earth-50">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display font-bold text-earth-900 mb-4">
              Our Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Real voices from our community - youth, Elders, families, and partners sharing their CAMPFIRE journey.
            </p>
          </div>
          <Link
            href="/stories"
            className="hidden md:inline-flex items-center text-sunset-600 font-semibold hover:text-sunset-700 transition-colors group"
          >
            View All Stories
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <article key={story.id} className="card group">
              {/* Image placeholder */}
              <div className="mb-4 h-48 bg-gradient-to-br from-earth-200 to-sunset-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center px-4">
                  Story image placeholder
                </p>
              </div>

              {/* Category and date */}
              <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>{story.category}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(story.publishedDate).toLocaleDateString('en-AU')}</span>
                </div>
              </div>

              {/* Title and excerpt */}
              <h3 className="font-display font-bold text-xl text-earth-900 mb-2 group-hover:text-sunset-600 transition-colors">
                <Link href={`/stories/${story.slug}`}>
                  {story.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                {story.excerpt}
              </p>

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

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/stories"
            className="inline-flex items-center text-sunset-600 font-semibold hover:text-sunset-700 transition-colors group"
          >
            View All Stories
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
