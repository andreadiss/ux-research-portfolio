import { useEffect, useMemo, useState } from 'react'

export const AnimatePresence = ({ children }) => <>{children}</>

function toMotionStyle(values = {}, transition = {}, phase = 'animate') {
  const style = {}
  const transform = []

  if (values.opacity !== undefined) style.opacity = values.opacity
  if (values.scale !== undefined) transform.push(`scale(${values.scale})`)
  if (values.y !== undefined) transform.push(`translateY(${values.y}px)`)
  if (values.x !== undefined) transform.push(`translateX(${values.x}px)`)
  if (transform.length) style.transform = transform.join(' ')

  if (phase === 'animate') {
    const duration = transition.duration ?? 0.25
    const delay = transition.delay ?? 0
    const ease = Array.isArray(transition.ease) ? `cubic-bezier(${transition.ease.join(',')})` : transition.ease || 'ease'
    style.transition = `opacity ${duration}s ${ease} ${delay}s, transform ${duration}s ${ease} ${delay}s`
  }

  return style
}

const createMotion = (Tag) =>
  function MotionComponent({ children, initial = {}, animate = {}, exit, transition = {}, style, ...rest }) {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
      const frame = requestAnimationFrame(() => setIsActive(true))
      return () => cancelAnimationFrame(frame)
    }, [])

    const baseStyle = useMemo(() => toMotionStyle(initial, transition, 'initial'), [initial, transition])
    const animateStyle = useMemo(() => toMotionStyle(animate, transition, 'animate'), [animate, transition])

    return (
      <Tag
        {...rest}
        style={{
          ...style,
          ...(isActive ? animateStyle : baseStyle),
        }}
      >
        {children}
      </Tag>
    )
  }

export const motion = {
  article: createMotion('article'),
  div: createMotion('div'),
  section: createMotion('section'),
}
