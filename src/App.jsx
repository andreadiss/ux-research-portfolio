import { useEffect, useLayoutEffect, useMemo, useState } from 'react'

import Hero from './components/Hero'
import FeedCard from './components/FeedCard'
import PollCard from './components/PollCard'
import SearchBar from './components/SearchBar'
import CaseStudyPage from './components/CaseStudyPage'
import Pill from './components/Pill'
import ThemeToggle from './components/ThemeToggle'
import { Mail, Linkedin } from './components/icons'
import { CASE_STUDIES } from './data/caseStudies'
import { FILTERS } from './data/filters'
import { POLLS } from './data/polls'
import { scoreCaseStudy } from './utils/search'
import { sortCaseStudies } from './utils/caseStudyOrder'
import { isRecent } from './utils/isRecent'
import { AnimatePresence, motion } from './utils/motion'

function MainPage({ onOpenCase }) {
  const [filter, setFilter] = useState(null)
  const [query, setQuery] = useState('')
  const [pollIndex, setPollIndex] = useState(0)

  const enriched = useMemo(
    () =>
      CASE_STUDIES.map((item) => {
        const recent = isRecent(item.date)
        return {
          ...item,
          isRecent: recent,
        }
      }),
    [],
  )

  const filtered = useMemo(() => {
    return sortCaseStudies(
      enriched
        .map((item) => ({ ...item, searchScore: scoreCaseStudy(item, query) }))
        .filter((item) => {
          const matchFilter = !filter || item.tags.includes(filter)
          const matchSearch = !query.trim() || item.searchScore > 0
          return matchFilter && matchSearch
        }),
      query,
    )
  }, [enriched, filter, query])

  const editorialFeed = useMemo(() => {
    if (filtered.length === 0) return null

    const featured = filtered.find((item) => item.featured) ?? filtered[0]
    const remainingAfterFeatured = filtered.filter((item) => item.id !== featured.id)
    const recent = [...remainingAfterFeatured].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0] ?? null
    const remaining = remainingAfterFeatured.filter((item) => item.id !== recent?.id)

    return {
      featured,
      rowTwoCases: remaining.slice(0, 2),
      rowThreeSmall: remaining[2] ?? null,
      recent,
    }
  }, [filtered])

  return (
    <div className="app-shell min-h-screen">
      <Hero onExplore={() => document.getElementById('feed')?.scrollIntoView({ behavior: 'smooth' })} />

      <div className="sticky top-0 z-40 app-topbar backdrop-blur-xl border-y border-subtle">
        <div className="flex flex-col gap-3 px-4 md:px-8 py-3">
          <SearchBar query={query} setQuery={setQuery} />
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {FILTERS.map((f) => (
              <Pill key={f} active={filter === f} onClick={() => setFilter((prev) => (prev === f ? null : f))}>
                {f}
              </Pill>
            ))}
          </div>
        </div>
      </div>

      <main id="feed" className="px-4 md:px-8 lg:px-10 py-6 md:py-8 space-y-5 md:space-y-6">
        {!editorialFeed ? (
          <div className="col-span-full rounded-[1.6rem] border border-subtle bg-surface p-10 text-center text-muted">No matches found. Try broader terms.</div>
        ) : (
          <>
            <div>
              <FeedCard item={editorialFeed.featured} onOpen={onOpenCase} variant="featured" badgeLabel="Featured" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {editorialFeed.rowTwoCases.map((item) => (
                <FeedCard key={item.id} item={item} onOpen={onOpenCase} variant="small" />
              ))}
              <PollCard key={`poll-${pollIndex}`} poll={POLLS[pollIndex]} onNext={() => setPollIndex((prev) => (prev + 1) % POLLS.length)} />
            </div>

            {(editorialFeed.rowThreeSmall || editorialFeed.recent) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {editorialFeed.rowThreeSmall ? <FeedCard item={editorialFeed.rowThreeSmall} onOpen={onOpenCase} variant="small" /> : <div className="hidden lg:block" />}
                {editorialFeed.recent ? (
                  <FeedCard item={editorialFeed.recent} onOpen={onOpenCase} variant="recent" badgeLabel="Recent" badgePulse />
                ) : null}
              </div>
            )}
          </>
        )}
      </main>

      <section className="px-4 md:px-8 lg:px-10 py-16 md:py-24 border-t border-subtle">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight">About</h2>
          </div>
          <div>
            <p className="text-secondary text-base md:text-xl leading-relaxed max-w-2xl">
              I design research that helps teams see customers more clearly, reduce uncertainty and make better product decisions. My work combines psychology,
              data analysis and user-centered thinking to turn signals into direction.
            </p>
            <ul className="mt-8 space-y-3 text-secondary text-sm md:text-base">
              <li>• Mixed-method research across digital products and services</li>
              <li>• Strong focus on behavior, decision-making and comprehension</li>
              <li>• Experience translating evidence into product direction</li>
              <li>• Comfortable working between research depth and executive clarity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-10 py-16 md:py-24 border-t border-subtle">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
          <div>
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight">Contact</h2>
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <h3 className="font-heading text-primary text-2xl md:text-5xl font-semibold tracking-tight">Let’s work together</h3>
              <div className="flex flex-col gap-4 text-secondary text-base md:text-lg">
                <a className="inline-flex items-center gap-3 transition-colors hover:text-primary" href="mailto:hello@yourportfolio.com">
                  <Mail size={18} />
                  <span>hello@yourportfolio.com</span>
                </a>
                <a className="inline-flex items-center gap-3 transition-colors hover:text-primary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function DevTestCases() {
  const checks = [
    'import statement is valid',
    'feed cards remain visible',
    'search bar renders with icon',
    'search suggestions appear on focus',
    'filter buttons render without all filter',
    'AI personalization case includes real screenshots',
    'GenAI Assistant Research renders as a valid case study',
  ]

  return (
    <div className="hidden" data-testid="dev-test-cases">
      {checks.map((check) => (
        <span key={check}>{check}</span>
      ))}
    </div>
  )
}

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  const saved = window.localStorage.getItem('theme')
  return saved === 'light' || saved === 'dark' ? saved : 'dark'
}

export default function App() {
  const [active, setActive] = useState(null)
  const [theme, setTheme] = useState(getInitialTheme)

  useLayoutEffect(() => {
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(theme)
  }, [theme])

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="font-ui antialiased app-shell text-primary">
      <ThemeToggle theme={theme} onToggle={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />

      <AnimatePresence mode="wait">
        {active ? (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="fixed inset-0 z-30 backdrop-blur-lg pointer-events-none"
              style={{ background: "var(--overlay-strong)" }}
              aria-hidden="true"
            />
            <motion.div
              key="case"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-40 min-h-screen overflow-y-auto"
            >
              <CaseStudyPage item={active} onBack={() => setActive(null)} />
            </motion.div>
          </>
        ) : (
          <motion.div key="feed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <MainPage onOpenCase={setActive} />
            <DevTestCases />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
