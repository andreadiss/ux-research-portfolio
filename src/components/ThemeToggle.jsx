function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="theme-toggle fixed top-4 right-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/65 text-lg text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 hover:scale-[1.04] hover:border-white/35"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}

export default ThemeToggle
