export const SEARCH_SYNONYMS = {
  onboarding: ['setup', 'first use', 'activation'],
  navigation: ['findability', 'information architecture', 'wayfinding'],
  ai: ['genai', 'assistant', 'personalization', 'automation'],
  usability: ['usability testing', 'friction', 'task completion'],
  qualitative: ['interviews', 'moderated', 'exploratory'],
  quantitative: ['survey', 'a/b test', 'metrics'],
}

export const SEARCH_SUGGESTIONS = ['usability testing', 'AI personalization', 'navigation clarity', 'qualitative discovery', 'quantitative validation']

export function normalizeText(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim()
}

export function scoreCaseStudy(item, query) {
  const q = normalizeText(query)
  if (!q) return 1

  const title = normalizeText(item.title)
  const subtitle = normalizeText(item.subtitle)
  const category = normalizeText(item.category)
  const tags = item.tags.map(normalizeText).join(' ')
  const body = normalizeText([item.context, item.challenge, item.approach, item.insights, item.impact].join(' '))

  let score = 0

  if (title.includes(q)) score += 10
  if (subtitle.includes(q)) score += 6
  if (category.includes(q)) score += 5
  if (tags.includes(q)) score += 5
  if (body.includes(q)) score += 3

  const tokens = q.split(' ').filter(Boolean)
  tokens.forEach((token) => {
    if (title.includes(token)) score += 4
    if (subtitle.includes(token)) score += 2
    if (tags.includes(token)) score += 2
    if (body.includes(token)) score += 1

    const related = SEARCH_SYNONYMS[token] || []
    related.forEach((synonym) => {
      const syn = normalizeText(synonym)
      if (title.includes(syn)) score += 3
      if (subtitle.includes(syn)) score += 2
      if (tags.includes(syn)) score += 2
      if (body.includes(syn)) score += 1
    })
  })

  return score
}

export function getSearchSuggestions(query) {
  if (!query.trim()) return SEARCH_SUGGESTIONS.slice(0, 4)
  const q = normalizeText(query)
  return SEARCH_SUGGESTIONS.filter((item) => normalizeText(item).includes(q)).slice(0, 4)
}
