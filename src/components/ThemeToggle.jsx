function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="theme-toggle fixed top-4 right-4 z-50"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">
          ☀️
        </span>
        <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">
          🌙
        </span>
        <span className="theme-toggle__thumb" />
      </span>
    </button>
  )
}

export default ThemeToggle
