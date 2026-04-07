const DAY_IN_MS = 24 * 60 * 60 * 1000

export function isRecent(date, days = 14) {
  const parsedDate = new Date(date)
  if (Number.isNaN(parsedDate.getTime())) return false

  const now = new Date()
  const diffInMs = now.getTime() - parsedDate.getTime()
  const diffInDays = diffInMs / DAY_IN_MS

  return diffInDays >= 0 && diffInDays <= days
}
