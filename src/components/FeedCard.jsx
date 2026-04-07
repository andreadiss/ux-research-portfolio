import { useMemo, useState } from 'react'

import { motion } from '../utils/motion'
import { classNames } from './Pill'

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

export default FeedCard
