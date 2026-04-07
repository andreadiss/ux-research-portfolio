function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Pill({ children, active = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.16em] transition whitespace-nowrap',
        active ? 'bg-white text-black border-white' : 'text-white/70 border-white/10 bg-white/5 hover:border-white/20 hover:text-white',
      )}
    >
      {children}
    </button>
  )
}

export default Pill
export { classNames }
