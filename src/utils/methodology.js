export function getMethodologyTags(item, { limit = 3, includeType = true } = {}) {
  const typeTag = includeType && item.methodologies?.type ? [item.methodologies.type] : []
  const techniques = Array.isArray(item.methodologies?.techniques) ? item.methodologies.techniques : []
  return [...typeTag, ...techniques].slice(0, limit)
}

export function hasActiveMethodologyFilters(activeFilters) {
  return Boolean(activeFilters.type) || activeFilters.techniques.length > 0
}

export function matchesMethodologyFilters(item, activeFilters) {
  const { type, techniques } = item.methodologies || {}

  const typeMatch = !activeFilters.type || type === activeFilters.type

  const techniqueMatch =
    activeFilters.techniques.length === 0 ||
    activeFilters.techniques.some((technique) => techniques?.includes(technique))

  return typeMatch && techniqueMatch
}
