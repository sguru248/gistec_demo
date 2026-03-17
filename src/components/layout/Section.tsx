import { cn } from '../../lib/utils'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  dark?: boolean
  id?: string
}

export default function Section({ children, className, dark = false, id }: Props) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 px-4',
        dark ? 'bg-navy text-white' : 'bg-white',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}
