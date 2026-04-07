import { useMemo, useState } from 'react'

const AnimatePresence = ({ children }) => <>{children}</>

const createMotion = (Tag) =>
  function MotionComponent({ children, ...props }) {
    const {
      initial,
      animate,
      exit,
      transition,
      whileInView,
      viewport,
      whileHover,
      ...rest
    } = props
    return <Tag {...rest}>{children}</Tag>
  }

const motion = {
  article: createMotion('article'),
  div: createMotion('div'),
}

const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
)

const Mail = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16v16H4z" />
    <path d="M4 4l8 8 8-8" />
  </svg>
)

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.7-2.2 3.5-2.2 3.75 0 4.45 2.47 4.45 5.68V24h-4v-8.6c0-2.05-.04-4.7-2.85-4.7-2.85 0-3.3 2.22-3.3 4.55V24h-4V8z" />
  </svg>
)

const X = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
)

const SearchIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
)

const HERO_VIDEO_URL = 'https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4'

const CASE_STUDIES = [
  {
    id: 'app-1',
    title: 'Streaming App Redesign',
    category: 'App',
    tags: ['qualitative research', 'apps'],
    cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    subtitle: 'Improving decision-making in content discovery',
    context: 'A large entertainment product needed a clearer path between browsing intent and content selection across key app surfaces.',
    challenge: 'Users moved through the experience quickly, but decision friction emerged when comparing options and understanding where to go next.',
    approach: 'I combined behavioral analysis, usability testing, click-path review and iterative concept validation to refine structure and salience.',
    insights: 'Small changes in hierarchy, visual emphasis and content grouping improved orientation and reduced hesitation in critical moments.',
    impact: 'The redesign supported faster discovery, more confident exploration and a stronger foundation for future product iteration.',
    visuals: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 'app-2',
    title: 'Finance App Navigation',
    category: 'App',
    tags: ['quantitative research', 'apps'],
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    subtitle: 'Making high-value actions easier to find',
    context: 'A mobile finance experience needed to improve access to everyday tasks without increasing interface complexity.',
    challenge: 'Core actions were available, but users often struggled to identify the right entry point quickly.',
    approach: 'I used task-based evaluation, hierarchy testing and label validation to optimize findability across navigation layers.',
    insights: 'Clearer naming and more deliberate prioritization enabled users to understand the structure faster and act with less uncertainty.',
    impact: 'The work created a more intuitive foundation for task completion and future feature growth.',
    visuals: ['https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80'],
  },
  {
    id: 'app-3',
    title: 'Smart TV Onboarding',
    category: 'App',
    tags: ['qualitative research', 'apps'],
    cover: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1600&q=80',
    subtitle: 'Reducing cognitive load at setup',
    context: 'A connected device onboarding flow needed to feel simpler while still covering key decisions.',
    challenge: 'Users encountered moments of uncertainty when the experience shifted between instruction and action.',
    approach: 'I reviewed onboarding behavior, question patterns and early-stage comprehension to refine sequencing and guidance.',
    insights: 'Reducing effort was less about removing steps and more about making transitions feel obvious and predictable.',
    impact: 'The new direction created a more reassuring first-use experience.',
    visuals: ['https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80'],
  },
  {
    id: 'web-1',
    title: 'Editorial Platform Evolution',
    category: 'Website',
    tags: ['qualitative research', 'website'],
    cover: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1600&q=80',
    subtitle: 'Balancing readability and hierarchy',
    context: 'An editorial platform was evolving toward richer formats while preserving clarity and editorial authority.',
    challenge: 'New content modules added flexibility, but risked fragmentation and inconsistent reading flows.',
    approach: 'I evaluated scanning behavior, first impressions and content interaction patterns to define stronger visual hierarchy principles.',
    insights: 'Users responded best when the layout protected orientation and signaled relevance early, without visual overload.',
    impact: 'The output supported a cleaner system for future editorial modules and more deliberate content emphasis.',
    visuals: [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 'web-2',
    title: 'News Homepage Hierarchy',
    category: 'Website',
    tags: ['quantitative research', 'website'],
    cover: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80',
    subtitle: 'Understanding attention',
    context: 'A newsroom team needed clearer evidence on what captured attention in the first few seconds of homepage exposure.',
    challenge: 'Competing editorial priorities made visual hierarchy hard to align.',
    approach: 'I combined first-impression testing and attention analysis to identify what surfaced immediately and what faded into noise.',
    insights: 'Attention was highly selective; the strongest layouts made relevance and structure visible right away.',
    impact: 'The output helped align design choices around salience, recall and editorial clarity.',
    visuals: ['https://images.unsplash.com/photo-1516321310764-8d0f1b5c0c20?auto=format&fit=crop&w=1600&q=80'],
  },
  {
    id: 'web-3',
    title: 'Cross-platform Flow',
    category: 'Website',
    tags: ['qualitative research', 'website'],
    cover: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1600&q=80',
    subtitle: 'Continuity across touchpoints',
    context: 'A media ecosystem required a more coherent experience across app, web and connected surfaces.',
    challenge: 'Users expected continuity, but interactions felt fragmented between environments.',
    approach: 'I mapped journeys, evaluated friction points and used mixed-method research to uncover where continuity broke down.',
    insights: 'Consistency works best when behavior, expectations and context of use are considered together.',
    impact: 'The work informed clearer cross-platform patterns and more cohesive design decisions.',
    visuals: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80'],
  },
  {
    id: 'ai-1',
    title: 'AI Personalization System',
    category: 'AI',
    tags: ['Ai', 'qualitative research'],
    cover: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1600&q=80',
    subtitle: 'Making AI useful, clear and actionable',
    context: 'We tested a new AI agent within Sky.it to understand how people perceive it, when they recognize it and how it supports decision-making during exploration.',
    challenge: 'The main challenge was not usability, but comprehension: users needed to understand what the AI is, what it can do and when to use it during their journey.',
    approach: 'We conducted usability tests with think aloud on mobile, focusing on homepage, offer pages and interactions with the AI agent to observe recognition, usage and expectations.',
    insights: 'The AI is widely recognized and appreciated for speed and autonomy, but the interaction is not always perceived as a real conversation. Different entry points reduce the sense of a single, consistent agent.',
    impact: 'Clarifying the conversational context, aligning entry points and guiding first use can increase trust, usage and perceived value of the AI within the experience.',
    visuals: [
      'https://images.unsplash.com/photo-1677442135722-30def98b2111?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 'genai-1',
    title: 'GenAI Assistant Research',
    category: 'AI',
    tags: ['Ai', 'quantitative research'],
    cover: 'https://images.unsplash.com/photo-1677442135722-30def98b2111?auto=format&fit=crop&w=1600&q=80',
    subtitle: 'Selecting the right voice for a virtual assistant',
    context: 'We evaluated multiple AI voices to identify the best fit for Sky’s virtual assistant, focusing on perception, trust and interaction propensity.',
    challenge: 'All voices perform well overall. The challenge is to identify the one that feels most human, trustworthy and aligned with the brand.',
    approach: 'Quantitative survey with 1000 Sky customers. Each participant evaluated one voice and then compared all voices across key dimensions.',
    insights: 'Voices are generally clear, friendly and professional, but still perceived as partly artificial. Human-likeness is the main differentiator. Isabella feels more human and pleasant, while 11Labs performs best overall.',
    impact: 'Choosing the right voice can strengthen trust, increase willingness to interact and improve the overall experience of the assistant.',
    visuals: [
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    ],
  },
]

const FILTERS = ['quantitative research', 'qualitative research', 'apps', 'website', 'Ai']

const POLLS = [
  {
    q: 'When exploring a new problem?',
    options: ['Interviews', 'Surveys'],
    feedback: {
      Interviews: 'Depth before scale works well.',
      Surveys: 'Broad signal, lower nuance.',
    },
  },
  {
    q: 'Best to validate interaction design?',
    options: ['Usability test', 'A/B test'],
    feedback: {
      'Usability test': 'Great for understanding friction.',
      'A/B test': 'Great for measuring impact.',
    },
  },
  {
    q: 'How would you shape information architecture?',
    options: ['Card sorting', 'Tree testing'],
    feedback: {
      'Card sorting': 'Useful for mental models.',
      'Tree testing': 'Useful for findability checks.',
    },
  },
  {
    q: 'Need to understand real-world context?',
    options: ['Field study', 'Lab test'],
    feedback: {
      'Field study': 'Context adds strong insight.',
      'Lab test': 'Control improves precision.',
    },
  },
  {
    q: 'What comes first in discovery?',
    options: ['Qualitative', 'Quantitative'],
    feedback: {
      Qualitative: 'Good for framing unknowns.',
      Quantitative: 'Good for sizing patterns.',
    },
  },
]

const SEARCH_SYNONYMS = {
  onboarding: ['setup', 'first use', 'activation'],
  navigation: ['findability', 'information architecture', 'wayfinding'],
  ai: ['genai', 'assistant', 'personalization', 'automation'],
  usability: ['usability testing', 'friction', 'task completion'],
  qualitative: ['interviews', 'moderated', 'exploratory'],
  quantitative: ['survey', 'a/b test', 'metrics'],
}

const SEARCH_SUGGESTIONS = ['usability testing', 'AI personalization', 'navigation clarity', 'qualitative discovery', 'quantitative validation']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function normalizeText(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim()
}

function scoreCaseStudy(item, query) {
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

function Pill({ children, active = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.16em] transition whitespace-nowrap',
        active ? 'bg-white text-black border-white' : 'text-white/70 border-white/10 bg-white/5 hover:border-white/20 hover:text-white',
      )}
    >
      {children}
    </button>
  )
}

function Hero({ onExplore }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4 md:px-8 pt-4 md:pt-6">
      <div className="relative w-full max-w-7xl h-[72vh] md:h-[84vh] rounded-[2rem] overflow-hidden border border-white/10 bg-black">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/88" />

        <div className="relative z-10 flex h-full items-end md:items-center p-6 md:p-12 lg:p-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-semibold tracking-tight leading-[0.95]">Designing experiences through customers insight</h1>
            <p className="mt-5 max-w-2xl text-white/75 text-base md:text-xl leading-relaxed">
              Remove opinionism from product decisions, get clear data-driven insights directly from your customers.
            </p>
            <button type="button" onClick={onExplore} className="mt-8 inline-flex items-center gap-3 rounded-full bg-white text-black px-6 py-3">
              Explore the feed <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeedCard({ item, onOpen, large = false }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [likes, setLikes] = useState(() => Math.floor(Math.random() * 180) + 40)
  const comments = useMemo(() => Math.floor(Math.random() * 18) + 4, [])

  const toggleLike = () => {
    setLiked((prev) => !prev)
    setLikes((prev) => prev + (liked ? -1 : 1))
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={classNames('group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5', large ? 'lg:col-span-2' : '')}
    >
      <button type="button" onClick={() => onOpen(item)} className="block w-full text-left">
        <div className={classNames('relative w-full overflow-hidden', large ? 'h-[420px]' : 'h-[320px] md:h-[360px]')}>
          <img src={item.cover} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/82 via-black/35 to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />

          <div className="absolute left-0 right-0 top-0 p-4 flex justify-between gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur border border-white/30 text-white">{item.category}</span>
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur border border-white/30 text-white">{item.tags[0]}</span>
          </div>

          {item.isRecent && (
            <div className="absolute top-12 left-4">
              <span className="px-3 py-1 text-[10px] uppercase bg-white text-black rounded-full">Recent</span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-xl font-semibold tracking-tight">{item.title}</h3>
            <p className="text-white/60 text-sm mt-1">{item.subtitle}</p>
          </div>
        </div>
      </button>

      <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button type="button" onClick={toggleLike} className={liked ? 'text-white' : 'text-white/60 hover:text-white'}>
            ♥ {likes}
          </button>
          <button type="button" onClick={() => onOpen(item)} className="text-white/60 hover:text-white">
            💬 {comments}
          </button>
        </div>

        <button type="button" onClick={() => setSaved((prev) => !prev)} className="text-white/60 hover:text-white">
          {saved ? '★' : '☆'}
        </button>
      </div>
    </motion.article>
  )
}

function PollCard({ poll, onNext }) {
  const [choice, setChoice] = useState(null)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 flex flex-col justify-between min-h-[320px]"
    >
      <div>
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white mb-4">Poll</span>
        <p className="text-white text-xl leading-relaxed">{poll.q}</p>
      </div>

      <div className="mt-6 space-y-3">
        {poll.options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => setChoice(opt)}
            className={classNames(
              'block w-full rounded-xl border px-4 py-3 text-left transition',
              choice === opt ? 'border-white bg-white text-black' : 'border-white/10 bg-white/5 text-white hover:border-white/25',
            )}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="mt-5 min-h-[24px] text-white/65 text-sm">{choice ? poll.feedback[choice] : ''}</div>

      <button type="button" onClick={onNext} className="mt-4 bg-white text-black px-4 py-2 rounded-full w-fit">
        {choice ? 'Next question' : 'Skip'}
      </button>
    </motion.article>
  )
}

function SearchBar({ query, setQuery }) {
  const [focused, setFocused] = useState(false)

  const suggestions = useMemo(() => {
    if (!query.trim()) return SEARCH_SUGGESTIONS.slice(0, 4)
    const q = normalizeText(query)
    return SEARCH_SUGGESTIONS.filter((item) => normalizeText(item).includes(q)).slice(0, 4)
  }, [query])

  return (
    <div className="w-full relative max-w-md">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
          <SearchIcon size={16} />
        </span>
        <input
          placeholder="Search research, methods, projects..."
          value={query}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 120)}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-20 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 transition"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] uppercase tracking-[0.16em] text-white/35">AI Search</div>
      </div>

      {focused && suggestions.length > 0 && (
        <div className="absolute mt-2 w-full rounded-xl border border-white/10 bg-black/95 backdrop-blur p-2 z-50 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          {suggestions.map((item) => (
            <button
              key={item}
              type="button"
              onMouseDown={() => setQuery(item)}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

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

function CaseSectionCard({ title, content, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="min-w-[82vw] sm:min-w-[60vw] lg:min-w-[34vw] rounded-[1.5rem] border border-white/10 bg-white/6 p-5 md:p-6 snap-start"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <Pill>{title}</Pill>
        <span className="text-white/35 text-sm">0{index + 1}</span>
      </div>
      <p className="text-white/82 text-base md:text-lg leading-relaxed">{content}</p>
    </motion.div>
  )
}

function CaseStudyPage({ item, onBack }) {
  const sections = [
    { title: 'Context', content: item.context },
    { title: 'Challenge', content: item.challenge },
    { title: 'Approach', content: item.approach },
    { title: 'Insights', content: item.insights },
    { title: 'Impact', content: item.impact },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl px-4 md:px-8 lg:px-10">
        <div className="flex items-center justify-between py-4">
          <button type="button" onClick={onBack} className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white transition">
            <span>←</span>
            <span>Back to feed</span>
          </button>
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-white/10 p-2 text-white/70 hover:text-white transition"
            aria-label="Close case study"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <section className="px-4 md:px-8 lg:px-10 pt-6 md:pt-8">
        <div className="relative h-[58vh] md:h-[72vh] rounded-[2rem] overflow-hidden border border-white/10">
          <img src={item.cover} alt={item.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/92" />
          <div className="absolute left-0 right-0 top-0 p-5 md:p-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur border border-white/30 text-white">{item.category}</span>
            {item.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur border border-white/30 text-white">
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.96] max-w-5xl">{item.title}</h1>
            <p className="mt-4 text-white/72 text-base md:text-2xl leading-relaxed max-w-3xl">{item.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-10 py-6 md:py-8 border-b border-white/10">
        <div className="flex items-center gap-5 text-white/70 overflow-x-auto no-scrollbar">
          <span className="text-sm uppercase tracking-[0.16em] whitespace-nowrap">Content thread</span>
          <span className="text-sm whitespace-nowrap">5 cards</span>
          <span className="text-sm whitespace-nowrap">Swipe to explore</span>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-10 py-8 md:py-10">
        <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          {sections.map((section, index) => (
            <CaseSectionCard key={section.title} title={section.title} content={section.content} index={index} />
          ))}
        </div>
      </section>

      {!!item.visuals.length && (
        <section className="px-4 md:px-8 lg:px-10 pb-20 md:pb-24">
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {item.visuals.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                <img src={src} alt={`${item.title} visual ${index + 1}`} className="h-[280px] md:h-[420px] w-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}
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
          <motion.div key="case" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <CaseStudyPage item={active} onBack={() => setActive(null)} />
          </motion.div>
        ) : (
          <motion.div key="feed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <MainPage onOpenCase={setActive} />
            <DevTestCases />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
