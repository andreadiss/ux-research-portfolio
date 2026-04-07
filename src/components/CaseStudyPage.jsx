import { useLayoutEffect } from 'react'

import { X } from './icons'

import Pill from './Pill'
import { motion } from '../utils/motion'

function CaseSectionCard({ title, content, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.22 + index * 0.06, ease: 'ease-out' }}
      className="min-w-[82vw] sm:min-w-[60vw] lg:min-w-[34vw] rounded-[1.5rem] border card-surface p-5 md:p-6 snap-start"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <Pill>{title}</Pill>
        <span className="text-muted text-sm">0{index + 1}</span>
      </div>
      <p className="text-secondary text-base md:text-lg leading-relaxed">{content}</p>
    </motion.div>
  )
}

function CaseStudyPage({ item, onBack }) {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [item.id])

  const sections = [
    { title: 'Context', content: item.context },
    { title: 'Challenge', content: item.challenge },
    { title: 'Approach', content: item.approach },
    { title: 'Insights', content: item.insights },
    { title: 'Impact', content: item.impact },
  ]

  return (
    <div className="min-h-screen overflow-y-auto bg-surface-modal text-primary">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.26, ease: 'ease-out', delay: 0.06 }}
        className="sticky top-0 z-40 border-b border-subtle app-topbar backdrop-blur-xl px-4 md:px-8 lg:px-10"
      >
        <div className="flex items-center justify-between py-4">
          <button type="button" onClick={onBack} className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition">
            <span>←</span>
            <span>Back to feed</span>
          </button>
          <button type="button" onClick={onBack} className="rounded-full border border-subtle p-2 text-secondary hover:text-primary transition" aria-label="Close case study">
            <X size={16} />
          </button>
        </div>
      </motion.div>

      <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="px-4 md:px-8 lg:px-10 pt-6 md:pt-8">
        <div className="relative h-[58vh] md:h-[72vh] rounded-[2rem] overflow-hidden border border-subtle">
          <img src={item.cover} alt={item.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 overlay-image-top pointer-events-none" />
          <div className="absolute inset-0 overlay-image-bottom pointer-events-none" />
          <div className="absolute left-0 right-0 top-0 p-5 md:p-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest chip-category">{item.category}</span>
            {item.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest chip-default">
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.96] max-w-5xl">{item.title}</h1>
            <p className="mt-4 text-white/80 text-base md:text-2xl leading-relaxed max-w-3xl">{item.subtitle}</p>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.16 }} className="px-4 md:px-8 lg:px-10 py-6 md:py-8 border-b border-subtle">
        <div className="flex items-center gap-5 text-muted overflow-x-auto no-scrollbar">
          <span className="text-sm uppercase tracking-[0.16em] whitespace-nowrap">Content thread</span>
          <span className="text-sm whitespace-nowrap">5 cards</span>
          <span className="text-sm whitespace-nowrap">Swipe to explore</span>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="px-4 md:px-8 lg:px-10 py-8 md:py-10">
        <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          {sections.map((section, index) => (
            <CaseSectionCard key={section.title} title={section.title} content={section.content} index={index} />
          ))}
        </div>
      </motion.section>

      {!!item.visuals.length && (
        <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.24 }} className="px-4 md:px-8 lg:px-10 pb-20 md:pb-24">
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {item.visuals.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="overflow-hidden rounded-[1.5rem] border card-surface"
              >
                <img src={src} alt={`${item.title} visual ${index + 1}`} className="h-[280px] md:h-[420px] w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  )
}

export default CaseStudyPage
