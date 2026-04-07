export function matchesSearchQuery(study, query) {
  if (!query.trim()) return true

  const normalized = query.toLowerCase()
  const haystack = [study.title, study.summary, study.method, study.stage, study.tags.join(' ')].join(
    ' ',
  )

  return haystack.toLowerCase().includes(normalized)
}
