import { cn } from '../../lib/utils'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  hover?: boolean
  accent?: 'blue' | 'green' | 'teal' | 'amber' | 'none'
  style?: React.CSSProperties
}

const accentColors = {
  blue: 'hover:border-t-navy-light',
  green: 'hover:border-t-gistec-green',
  teal: 'hover:border-t-teal',
  amber: 'hover:border-t-amber',
  none: '',
}

export default function Card({ children, className, hover = true, accent = 'blue', style }: Props) {
  return (
    <div
      style={style}
      className={cn(
        'bg-white rounded-2xl shadow-md border border-slate-100 p-6',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-t-transparent',
        accent !== 'none' && accentColors[accent],
        className
      )}
    >
      {children}
    </div>
  )
}
