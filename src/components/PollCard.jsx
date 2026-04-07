import { useState } from 'react'

import { motion } from '../utils/motion'
import { classNames } from './Pill'

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

export default PollCard
