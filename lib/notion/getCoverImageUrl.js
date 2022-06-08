
import { defaultMapImageUrl } from 'react-notion-x'

export default function getCoverImageUrl ({ pageId, block }) {
  if (!block) return null

  const item = block[pageId]

  if (item && item?.value?.format?.page_cover) {
    return defaultMapImageUrl(item.value.format.page_cover, item.value)
  }

  return null
}
