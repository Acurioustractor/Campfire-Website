'use client'

import { NotionRenderer as NotionRendererLib } from 'react-notion-x'
import 'react-notion-x/src/styles.css'

export function NotionRenderer({ recordMap }: { recordMap: any }) {
  if (!recordMap) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No content available</p>
      </div>
    )
  }

  return (
    <div className="notion-container">
      <NotionRendererLib
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        disableHeader={true}
      />
    </div>
  )
}
