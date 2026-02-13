const API_BASE = 'https://empathy-ledger-v2.vercel.app/api/v1/content-hub'
const PROJECT_SLUG = 'bg-fit'

// --- Types ---

export interface ELStory {
  id: string
  title: string
  summary: string
  authorName: string
  authorId: string
  publishedAt: string
  themes: { name: string }[]
  visibility: string
  isPublic: boolean
}

export interface ELStoryteller {
  id: string
  displayName: string
  bio: string
  avatarUrl: string | null
  culturalBackground: string[] | null
  specialties: string[]
  elderStatus: boolean
  storyCount: number
  featured: boolean
  community: string | null
  themes: string[]
  quotes: { text: string; context: string; impactScore: number }[]
  transcriptCount: number
  qualityScore: number
}

export interface ELProjectAnalysis {
  project: { id: string; name: string; slug: string; description: string }
  themes: { name: string; count: number; confidence: number }[]
  quotes: { text: string; context: string; impactScore: number; storytellerId: string | null }[]
  almaSignals: Record<string, any> | null
  storytellerCount: number
  transcriptCount: number
  qualityScore: number
  analyzedAt: string
  analyzed: boolean
}

interface PaginatedResponse<T> {
  pagination: {
    page: number
    limit: number
    total: number
    hasMore?: boolean
    pages?: number
  }
}

interface StoriesResponse extends PaginatedResponse<ELStory> {
  stories: ELStory[]
}

interface StorytellersResponse extends PaginatedResponse<ELStoryteller> {
  storytellers: ELStoryteller[]
}

// --- Fetch helpers ---

async function elFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      headers: {
        'X-API-Key': process.env.EMPATHY_LEDGER_API_KEY || 'campfire-2026',
      },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

// --- Public API ---

export async function getELStories(): Promise<ELStory[]> {
  const data = await elFetch<StoriesResponse>(`/stories?limit=50&project=${PROJECT_SLUG}`)
  return data?.stories?.filter(s => s.isPublic) ?? []
}

export async function getELStorytellers(): Promise<ELStoryteller[]> {
  const data = await elFetch<StorytellersResponse>(`/storytellers?limit=50&project=${PROJECT_SLUG}`)
  return data?.storytellers ?? []
}

export async function getELElders(): Promise<ELStoryteller[]> {
  const storytellers = await getELStorytellers()
  return storytellers.filter(s => s.elderStatus)
}

export async function getELProjectAnalysis(): Promise<ELProjectAnalysis | null> {
  return elFetch<ELProjectAnalysis>(`/analysis?project=${PROJECT_SLUG}`)
}

export async function getELThemes(): Promise<{ name: string; count: number; confidence: number }[]> {
  const data = await elFetch<{ themes: { name: string; count: number; confidence: number }[] }>(`/themes?project=${PROJECT_SLUG}`)
  return data?.themes ?? []
}
