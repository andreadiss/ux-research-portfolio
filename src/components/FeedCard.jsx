import { useMemo, useState } from 'react'

import { motion } from '../utils/motion'
import { classNames } from './Pill'

function FeedCard({ item, onOpen, variant = 'small', badgeLabel = null, badgePulse = false }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [likes, setLikes] = useState(() => Math.floor(Math.random() * 180) + 40)
  const comments = useMemo(() => Math.floor(Math.random() * 18) + 4, [])
  const isFeatured = variant === 'featured'
  const isRecent = variant === 'recent'

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
      className={classNames('group overflow-hidden rounded-[1.6rem] border card-surface', isRecent ? 'lg:col-span-2' : '')}
    >
      <button type="button" onClick={() => onOpen(item)} className="block w-full text-left">
        <div className={classNames('relative w-full overflow-hidden', isFeatured ? 'aspect-[16/9]' : isRecent ? 'h-[320px] md:h-[400px]' : 'h-[300px] md:h-[340px]')}>
          <img src={item.cover} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
          <div className={classNames('absolute top-0 left-0 right-0 overlay-image-top', isFeatured ? 'h-44' : 'h-28')} />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500" style={{ background: 'radial-gradient(circle at center, var(--hover-soft), transparent 60%)' }} />
          <div
            className="absolute inset-0 overlay-image-bottom"
            style={isFeatured ? { background: 'linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.18))' } : undefined}
          />

          <div className="absolute left-0 right-0 top-0 p-4 flex justify-between gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest chip-category">{item.category}</span>
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest chip-default">{item.tags[0]}</span>
          </div>

          {badgeLabel && (
            <div className="absolute top-12 left-4">
              <span className="px-3.5 py-1.5 text-[10px] uppercase rounded-full chip-badge inline-flex items-center gap-2">
                {badgePulse ? (
                  <span className="recent-dot" aria-hidden="true">
                    <span className="recent-dot__pulse" />
                    <span className="recent-dot__pulse recent-dot__pulse--delay" />
                    <span className="recent-dot__core" />
                  </span>
                ) : null}
                {badgeLabel}
              </span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className={classNames('font-heading text-white font-semibold tracking-tight', isFeatured ? 'text-2xl md:text-4xl' : isRecent ? 'text-2xl md:text-3xl' : 'text-xl')}>
              {item.title}
            </h3>
            <p className={classNames('text-white/70 mt-1', isFeatured ? 'text-sm md:text-base max-w-3xl' : 'text-sm')}>{item.subtitle}</p>
          </div>
        </div>
      </button>

      <div className="px-4 py-3 border-t border-subtle flex items-center justify-between gap-4 text-secondary">
        <div className="flex items-center gap-4">
          <button type="button" onClick={toggleLike} className={liked ? 'text-primary' : 'hover:text-primary transition'}>
            ♥ {likes}
          </button>
          <button type="button" onClick={() => onOpen(item)} className="hover:text-primary transition">
            💬 {comments}
          </button>
        </div>

        <button type="button" onClick={() => setSaved((prev) => !prev)} className="hover:text-primary transition">
          {saved ? '★' : '☆'}
        </button>
      </div>
    </motion.article>
  )
}

export default FeedCard
