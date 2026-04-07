function SearchBar({ value, onChange }) {
  return (
    <label className="search">
      <span>AI-like semantic search</span>
      <input
        type="search"
        placeholder="Try: checkout friction, trust, onboarding"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

export default SearchBar
