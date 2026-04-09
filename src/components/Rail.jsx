function Rail({ title, items, onOpen, renderCard, emptyMessage }) {
  if (!items.length) {
    return (
      <section aria-label={title} className="space-y-3">
        <h2 className="font-heading text-xl md:text-2xl tracking-tight">{title}</h2>
        <div className="rounded-[1.25rem] border border-subtle bg-surface px-5 py-8 text-sm text-muted">{emptyMessage}</div>
      </section>
    )
  }

  return (
    <section aria-label={title} className="space-y-3">
      <h2 className="font-heading text-xl md:text-2xl tracking-tight">{title}</h2>
      <div className="rail-scroller no-scrollbar">
        {items.map((item) => renderCard(item, onOpen))}
      </div>
    </section>
  )
}

export default Rail
