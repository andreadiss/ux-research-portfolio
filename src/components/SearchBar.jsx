import { useMemo, useState } from 'react'
import { SearchIcon } from './icons'
import { getSearchSuggestions } from '../utils/search'

function SearchBar({ query, setQuery }) {
  const [focused, setFocused] = useState(false)

  const suggestions = useMemo(() => getSearchSuggestions(query), [query])

  return (
    <div className="w-full relative max-w-md">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
          <SearchIcon size={16} />
        </span>
        <input
          placeholder="Search research, methods, projects..."
          value={query}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 120)}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full input-surface rounded-full pl-9 pr-20 py-2 text-sm outline-none focus:border-strong transition"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] uppercase tracking-[0.16em] text-muted">AI Search</div>
      </div>

      {focused && suggestions.length > 0 && (
        <div className="absolute mt-2 w-full rounded-xl border border-subtle backdrop-blur p-2 z-50" style={{ background: 'var(--dropdown-bg)', boxShadow: 'var(--shadow-elevated)' }}>
          {suggestions.map((item) => (
            <button
              key={item}
              type="button"
              onMouseDown={() => setQuery(item)}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm text-secondary hover:text-primary hover:bg-surface-strong transition"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
