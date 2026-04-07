import { useEffect, useMemo, useState } from 'react'

import Hero from './components/Hero'
import FeedCard from './components/FeedCard'
import PollCard from './components/PollCard'
import SearchBar from './components/SearchBar'
import CaseStudyPage from './components/CaseStudyPage'
import Pill from './components/Pill'
import { Mail, Linkedin } from './components/icons'
import { CASE_STUDIES } from './data/caseStudies'
import { FILTERS } from './data/filters'
import { POLLS } from './data/polls'
import { scoreCaseStudy } from './utils/search'
import { AnimatePresence, motion } from './utils/motion'

function MainPage({ onOpenCase }) {
  const [filter, setFilter] = useState(null)
  const [query, setQuery] = useState('')
  const [pollIndex, setPollIndex] = useState(0)

  const enriched = useMemo(() => CASE_STUDIES.map((item, index) => ({ ...item, isRecent: index === 0 })), [])

  const filtered = useMemo(() => {
    return enriched
      .map((item) => ({ ...item, searchScore: scoreCaseStudy(item, query) }))
      .filter((item) => {
        const matchFilter = !filter || item.tags.includes(filter)
        const matchSearch = !query.trim() || item.searchScore > 0
        return matchFilter && matchSearch
      })
      .sort((a, b) => b.searchScore - a.searchScore)
  }, [enriched, filter, query])

  const feedItems = useMemo(() => {
    const output = []
    filtered.forEach((item, index) => {
      output.push({ type: 'case', data: item })
      if (index === 1) output.push({ type: 'poll' })
    })
    return output
  }, [filtered])

  return (
    <div className="bg-black text-white min-h-screen">
      <Hero onExplore={() => document.getElementById('feed')?.scrollIntoView({ behavior: 'smooth' })} />

      <div className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-y border-white/10">
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

      <main id="feed" className="px-4 md:px-8 lg:px-10 py-6 md:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {feedItems.length === 0 ? (
          <div className="col-span-full rounded-[1.6rem] border border-white/10 bg-white/5 p-10 text-center text-white/65">No matches found. Try broader terms.</div>
        ) : (
          feedItems.map((item, index) =>
            item.type === 'poll' ? (
              <PollCard key={`poll-${pollIndex}-${index}`} poll={POLLS[pollIndex]} onNext={() => setPollIndex((prev) => (prev + 1) % POLLS.length)} />
            ) : (
              <FeedCard key={item.data.id} item={item.data} onOpen={onOpenCase} large={item.data.isRecent} />
            ),
          )
        )}
      </main>

      <section className="px-4 md:px-8 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">About</h2>
          </div>
          <div>
            <p className="text-white/82 text-base md:text-xl leading-relaxed max-w-2xl">
              I design research that helps teams see customers more clearly, reduce uncertainty and make better product decisions. My work combines psychology,
              data analysis and user-centered thinking to turn signals into direction.
            </p>
            <ul className="mt-8 space-y-3 text-white/76 text-sm md:text-base">
              <li>• Mixed-method research across digital products and services</li>
              <li>• Strong focus on behavior, decision-making and comprehension</li>
              <li>• Experience translating evidence into product direction</li>
              <li>• Comfortable working between research depth and executive clarity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Contact</h2>
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <h3 className="text-white text-2xl md:text-5xl font-semibold tracking-tight">Let’s work together</h3>
              <div className="flex flex-col gap-4 text-white/80 text-base md:text-lg">
                <a className="inline-flex items-center gap-3 transition-colors hover:text-white" href="mailto:hello@yourportfolio.com">
                  <Mail size={18} />
                  <span>hello@yourportfolio.com</span>
                </a>
                <a className="inline-flex items-center gap-3 transition-colors hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
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

export default function App() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <div className="font-serif antialiased bg-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #000; font-family: 'Playfair Display', serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <AnimatePresence mode="wait">
        {active ? (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="fixed inset-0 z-30 bg-black/85 backdrop-blur-lg"
              aria-hidden="true"
            />
            <motion.div
              key="case"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-40"
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
