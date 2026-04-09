import { motion } from '../utils/motion'
import { getMethodologyTags } from '../utils/methodology'
import { classNames } from './Pill'

function FeedCard({ item, onOpen, variant = 'standard' }) {
  const isFeatured = variant === 'featured'
  const methodologyTags = getMethodologyTags(item)

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4, scale: 1.015 }}
      className={classNames('group rail-card overflow-hidden rounded-[1.4rem] border card-surface', isFeatured && 'rail-card--featured')}
    >
      <button type="button" onClick={() => onOpen(item)} className="block w-full text-left focus:outline-none">
        <div className={classNames('relative w-full overflow-hidden', isFeatured ? 'h-[250px] md:h-[320px]' : 'h-[210px] md:h-[250px]')}>
          <img src={item.cover} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
          <div className="absolute inset-0 overlay-image-bottom" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500" style={{ background: 'radial-gradient(circle at center, var(--hover-soft), transparent 65%)' }} />

          {methodologyTags.length > 0 && (
            <div className="absolute left-0 right-0 top-0 p-4 md:p-5 flex flex-wrap gap-2">
              {methodologyTags.map((tag) => (
                <span key={`${item.id}-${tag}`} className="px-2.5 py-1 rounded-full text-[10px] tracking-[0.08em] chip-default">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
            <h3 className={classNames('font-heading text-white font-semibold tracking-tight', isFeatured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl')}>{item.title}</h3>
          </div>
        </div>
      </button>
    </motion.article>
  )
}

export default FeedCard
