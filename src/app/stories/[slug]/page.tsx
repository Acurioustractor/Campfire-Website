import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react'
import { getBlogPostBySlug, getPageContent } from '@/lib/notion'
import { NotionRenderer } from '@/components/NotionRenderer'

export const revalidate = 3600

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Story Not Found',
    }
  }

  return {
    title: `${post.title} | CAMPFIRE Stories`,
    description: post.excerpt || `Read ${post.title} on CAMPFIRE`,
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  }
}

export default async function StoryPage({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Fetch page content from Notion
  const pageContent = await getPageContent(post.id)

  return (
    <>
      {/* Back link */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <Link
            href="/stories"
            className="inline-flex items-center text-gray-600 hover:text-sunset-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Stories
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {post.publishedDate
                  ? new Date(post.publishedDate).toLocaleDateString('en-AU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  : 'Date TBD'}
              </span>
            </div>
            {post.author && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-earth-900 mb-8">
            {post.title}
          </h1>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Excerpt */}
          {post.excerpt && (
            <div className="mb-8 p-6 bg-earth-50 rounded-xl border-l-4 border-sunset-600">
              <p className="text-xl text-gray-700 italic">
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Video Embed */}
          {post.videoEmbed && (
            <div className="mb-8 aspect-video rounded-xl overflow-hidden">
              <iframe
                src={post.videoEmbed}
                className="w-full h-full"
                allowFullScreen
                title="Video"
              />
            </div>
          )}

          {/* Audio Embed */}
          {post.audioEmbed && (
            <div className="mb-8">
              <iframe
                src={post.audioEmbed}
                className="w-full h-32 rounded-xl"
                title="Audio"
              />
            </div>
          )}

          {/* Notion Content */}
          <div className="prose prose-lg max-w-none">
            {pageContent ? (
              <NotionRenderer recordMap={pageContent} />
            ) : (
              <div className="text-gray-500 text-center py-8">
                <p>Content loading...</p>
                <p className="text-sm mt-2">
                  If content doesn't appear, check your Notion API configuration.
                </p>
              </div>
            )}
          </div>

          {/* Share section */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-gray-600 mb-4">Share this story:</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-earth-100 text-earth-900 rounded-lg hover:bg-earth-200 transition-colors">
                Facebook
              </button>
              <button className="px-4 py-2 bg-earth-100 text-earth-900 rounded-lg hover:bg-earth-200 transition-colors">
                Twitter
              </button>
              <button className="px-4 py-2 bg-earth-100 text-earth-900 rounded-lg hover:bg-earth-200 transition-colors">
                Email
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related stories or CTA */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold text-earth-900 mb-6">
            Read More Stories
          </h2>
          <Link
            href="/stories"
            className="btn-primary inline-flex items-center"
          >
            View All Stories
            <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>
    </>
  )
}
