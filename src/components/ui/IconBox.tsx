import { cn } from '../../lib/utils'
import type { LucideIcon } from 'lucide-react'

interface Props {
  icon: LucideIcon
  variant?: 'blue' | 'green' | 'teal'
  size?: 'sm' | 'md' | 'lg'
}

const variants = {
  blue: 'bg-blue-50 text-navy-light',
  green: 'bg-green-50 text-gistec-green',
  teal: 'bg-teal-50 text-teal',
}

const sizes = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-18 h-18',
}

const iconSizes = { sm: 20, md: 28, lg: 36 }

export default function IconBox({ icon: Icon, variant = 'blue', size = 'md' }: Props) {
  return (
    <div className={cn('flex items-center justify-center rounded-xl', variants[variant], sizes[size])}>
      <Icon size={iconSizes[size]} />
    </div>
  )
}
