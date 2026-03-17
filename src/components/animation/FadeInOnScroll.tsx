import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const directionOffset = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { y: 0, x: -30 },
  right: { y: 0, x: 30 },
}

export default function FadeInOnScroll({ children, delay = 0, direction = 'up', className }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const offset = directionOffset[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
