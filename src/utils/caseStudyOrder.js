const CATEGORY_PRIORITY = {
  AI: 0,
  App: 1,
  Website: 2,
}

function getCategoryPriority(category) {
  return CATEGORY_PRIORITY[category] ?? Number.MAX_SAFE_INTEGER
}

function compareByPriority(a, b) {
  if (a.featured !== b.featured) {
    return a.featured ? -1 : 1
  }

  if (a.isRecent !== b.isRecent) {
    return a.isRecent ? -1 : 1
  }

  const categoryDiff = getCategoryPriority(a.category) - getCategoryPriority(b.category)
  if (categoryDiff !== 0) {
    return categoryDiff
  }

  const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime()
  if (!Number.isNaN(dateDiff) && dateDiff !== 0) {
    return dateDiff
  }

  return a.title.localeCompare(b.title)
}

export function sortCaseStudies(items, query = '') {
  const hasQuery = query.trim().length > 0

  return items
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      if (hasQuery && a.item.searchScore !== b.item.searchScore) {
        return b.item.searchScore - a.item.searchScore
      }

      const priorityDiff = compareByPriority(a.item, b.item)
      if (priorityDiff !== 0) {
        return priorityDiff
      }

      return a.index - b.index
    })
    .map(({ item }) => item)
}
