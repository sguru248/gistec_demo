import { cn } from '../../lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string
}

const variants = {
  primary: 'bg-navy-light text-white hover:bg-navy shadow-lg hover:shadow-xl',
  secondary: 'bg-gistec-green text-white hover:bg-emerald shadow-lg hover:shadow-xl',
  outline: 'border-2 border-navy-light text-navy-light hover:bg-navy-light hover:text-white',
  ghost: 'text-navy-light hover:bg-slate-100',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({ variant = 'primary', size = 'md', children, href, className, ...props }: Props) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
