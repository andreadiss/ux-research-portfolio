import { useState } from 'react'

function Poll({ poll }) {
  const [vote, setVote] = useState(null)

  return (
    <section className="poll" aria-live="polite">
      <h2>{poll.question}</h2>
      <div className="poll-options">
        {poll.options.map((option) => (
          <button
            key={option}
            type="button"
            className={vote === option ? 'chip chip-active' : 'chip'}
            onClick={() => setVote(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="muted">{vote ? `Vote captured: ${vote}` : 'Select one option to simulate voting.'}</p>
    </section>
  )
}

export default Poll
