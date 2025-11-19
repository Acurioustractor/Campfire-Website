import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

// Latest stories - these match our actual published stories
const stories = [
  {
    id: 'brodie-journey',
    title: 'My Journey: From Struggle to Strength',
    excerpt: 'I\'m Brodie Germaine, a Kalkadoon man from Mount Isa. This is my story - from football scholarships to addiction, to finding healing through cultural reconnection, and now dedicating my life to supporting young people through CAMPFIRE.',
    category: 'Elder Voices',
    publishedDate: '2024-11-13',
    slug: 'my-journey-brodie-germaine',
    featuredImage: '/images/brodie.jpg',
  },
  {
    id: 'naidoc-2024',
    title: 'Community Comes Together: Mount Isa NAIDOC Week Celebrations',
    excerpt: 'Every year, the Mount Isa community gathers to celebrate NAIDOC Week with a powerful march and community feed. This year, we spoke with Elders, youth workers, and community members about what NAIDOC means to them.',
    category: 'News',
    publishedDate: '2024-11-13',
    slug: 'mount-isa-naidoc-week-2024',
    featuredImage: '/images/Gallery/IMG_0900.jpg',
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
