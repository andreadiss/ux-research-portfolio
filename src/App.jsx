import { useMemo, useState } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import SearchBar from './components/SearchBar'
import Feed from './components/Feed'
import Poll from './components/Poll'
import CaseStudyList from './components/CaseStudyList'
import { caseStudies } from './data/caseStudies'
import { pollQuestion } from './data/poll'
import { matchesSearchQuery } from './utils/search'

function App() {
  const [selectedMethod, setSelectedMethod] = useState('All')
  const [query, setQuery] = useState('')

  const methods = useMemo(() => {
    const mapped = caseStudies.map((study) => study.method)
    return ['All', ...new Set(mapped)]
  }, [])

  const filtered = useMemo(() => {
    return caseStudies.filter((study) => {
      const methodMatch = selectedMethod === 'All' || study.method === selectedMethod
      const queryMatch = matchesSearchQuery(study, query)
      return methodMatch && queryMatch
    })
  }, [selectedMethod, query])

  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="toolbar" aria-label="Portfolio controls">
          <SearchBar value={query} onChange={setQuery} />
          <Filters options={methods} selected={selectedMethod} onChange={setSelectedMethod} />
        </section>

        <Feed items={filtered} />
        <CaseStudyList items={filtered} />
        <Poll poll={pollQuestion} />
      </main>
    </div>
  )
}

export default App
