function Feed({ items }) {
  return (
    <section>
      <h2>Research feed</h2>
      <ul className="card-grid" aria-label="Research feed">
        {items.map((item) => (
          <li key={item.id} className="card">
            <p className="eyebrow">{item.method}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <p className="muted">{item.tags.join(' · ')}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Feed
