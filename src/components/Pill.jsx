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
        active
          ? 'button-primary border-transparent'
          : 'text-secondary border-subtle bg-surface hover:text-primary hover:border-strong hover:bg-surface-strong',
      )}
    >
      {children}
    </button>
  )
}

export default Pill
export { classNames }
