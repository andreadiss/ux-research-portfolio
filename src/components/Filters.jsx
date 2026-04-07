function Filters({ options, selected, onChange }) {
  return (
    <fieldset className="filters">
      <legend>Filter by method</legend>
      <div className="chip-group">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={option === selected ? 'chip chip-active' : 'chip'}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  )
}

export default Filters
