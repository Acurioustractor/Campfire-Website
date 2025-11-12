'use client'

export function NotionRenderer({ recordMap }: { recordMap: any }) {
  if (!recordMap) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No content available</p>
        <p className="text-sm mt-2">Content will render when Notion API is configured</p>
      </div>
    )
  }

  return (
    <div className="prose prose-lg max-w-none">
      <div className="p-6 bg-earth-50 rounded-lg border border-earth-200">
        <p className="text-gray-700 mb-4">
          <strong>Notion Content Ready</strong>
        </p>
        <p className="text-gray-600 text-sm">
          This story was published from Notion. To see full content rendering, configure your Notion integration in the .env.local file and set up the blog database. See <code className="bg-white px-2 py-1 rounded">NOTION_SETUP.md</code> for instructions.
        </p>
      </div>
    </div>
  )
}
