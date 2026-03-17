import { cn } from '../../lib/utils'

interface Props {
  children: string
  variant?: 'blue' | 'green' | 'teal' | 'amber' | 'slate'
}

const variants = {
  blue: 'bg-blue-50 text-navy-light',
  green: 'bg-green-50 text-gistec-green',
  teal: 'bg-teal-50 text-teal',
  amber: 'bg-amber-50 text-amber-700',
  slate: 'bg-slate-100 text-slate-600',
}

export default function Badge({ children, variant = 'blue' }: Props) {
  return (
    <span className={cn('inline-block px-3 py-1 text-xs font-semibold rounded-full', variants[variant])}>
      {children}
    </span>
  )
}
