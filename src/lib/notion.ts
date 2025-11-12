import { Client } from '@notionhq/client'

// Initialize Notion client
export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

// Types for Notion database properties
export interface BlogPost {
  id: string
  title: string
  slug: string
  publishedDate: string
  status: string
  category: string
  featuredImage?: string
  author?: string
  content: string
  videoEmbed?: string
  audioEmbed?: string
  excerpt?: string
}

export interface SitePage {
  id: string
  pageName: string
  slug: string
  content: string
  lastUpdated: string
}

// Fetch blog posts from Notion database
export async function getBlogPosts(filter?: {
  category?: string
  status?: string
}): Promise<BlogPost[]> {
  if (!process.env.NOTION_BLOG_DATABASE_ID) {
    console.warn('NOTION_BLOG_DATABASE_ID is not set')
    return []
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: filter?.status || 'Published',
            },
          },
          ...(filter?.category
            ? [
                {
                  property: 'Category',
                  select: {
                    equals: filter.category,
                  },
                },
              ]
            : []),
        ],
      },
      sorts: [
        {
          property: 'Published Date',
          direction: 'descending',
        },
      ],
    })

    const posts = response.results.map((page: any) => {
      const properties = page.properties

      return {
        id: page.id,
        title: properties.Title?.title?.[0]?.plain_text || 'Untitled',
        slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
        publishedDate: properties['Published Date']?.date?.start || '',
        status: properties.Status?.select?.name || 'Draft',
        category: properties.Category?.select?.name || 'Uncategorized',
        featuredImage: properties['Featured Image']?.files?.[0]?.file?.url ||
                       properties['Featured Image']?.files?.[0]?.external?.url || '',
        author: properties.Author?.people?.[0]?.name || 'CAMPFIRE Team',
        videoEmbed: properties['Video Embed']?.url || '',
        audioEmbed: properties['Audio Embed']?.url || '',
        excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
        content: '', // Content will be fetched separately
      }
    })

    return posts as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!process.env.NOTION_BLOG_DATABASE_ID) {
    console.warn('NOTION_BLOG_DATABASE_ID is not set')
    return null
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
          {
            property: 'Status',
            select: {
              equals: 'Published',
            },
          },
        ],
      },
    })

    if (response.results.length === 0) {
      return null
    }

    const page: any = response.results[0]
    const properties = page.properties

    return {
      id: page.id,
      title: properties.Title?.title?.[0]?.plain_text || 'Untitled',
      slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
      publishedDate: properties['Published Date']?.date?.start || '',
      status: properties.Status?.select?.name || 'Draft',
      category: properties.Category?.select?.name || 'Uncategorized',
      featuredImage: properties['Featured Image']?.files?.[0]?.file?.url ||
                     properties['Featured Image']?.files?.[0]?.external?.url || '',
      author: properties.Author?.people?.[0]?.name || 'CAMPFIRE Team',
      videoEmbed: properties['Video Embed']?.url || '',
      audioEmbed: properties['Audio Embed']?.url || '',
      excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
      content: page.id, // Will use this to fetch page content
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Fetch page content from Notion
export async function getPageContent(pageId: string) {
  try {
    // Simplified - returns page ID for now
    // Full Notion page rendering can be added later with notion-to-md or similar
    return { id: pageId }
  } catch (error) {
    console.error('Error fetching page content:', error)
    return null
  }
}

// Fetch site pages from Notion database
export async function getSitePages(): Promise<SitePage[]> {
  if (!process.env.NOTION_PAGES_DATABASE_ID) {
    console.warn('NOTION_PAGES_DATABASE_ID is not set')
    return []
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PAGES_DATABASE_ID,
    })

    const pages = response.results.map((page: any) => {
      const properties = page.properties

      return {
        id: page.id,
        pageName: properties['Page Name']?.title?.[0]?.plain_text || 'Untitled',
        slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
        content: page.id, // Will use this to fetch page content
        lastUpdated: page.last_edited_time,
      }
    })

    return pages as SitePage[]
  } catch (error) {
    console.error('Error fetching site pages:', error)
    return []
  }
}

// Fetch a site page by slug
export async function getSitePageBySlug(slug: string): Promise<SitePage | null> {
  if (!process.env.NOTION_PAGES_DATABASE_ID) {
    console.warn('NOTION_PAGES_DATABASE_ID is not set')
    return null
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PAGES_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    })

    if (response.results.length === 0) {
      return null
    }

    const page: any = response.results[0]
    const properties = page.properties

    return {
      id: page.id,
      pageName: properties['Page Name']?.title?.[0]?.plain_text || 'Untitled',
      slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
      content: page.id,
      lastUpdated: page.last_edited_time,
    }
  } catch (error) {
    console.error('Error fetching site page:', error)
    return null
  }
}
