export const AnimatePresence = ({ children }) => <>{children}</>

const createMotion = (Tag) =>
  function MotionComponent({ children, ...props }) {
    const { initial, animate, exit, transition, whileInView, viewport, whileHover, ...rest } = props
    return <Tag {...rest}>{children}</Tag>
  }

export const motion = {
  article: createMotion('article'),
  div: createMotion('div'),
}
