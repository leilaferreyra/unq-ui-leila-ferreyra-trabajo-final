import type { ReactNode } from 'react'
import type { COLOR_VARIANTS } from '../../utils/colorVariants'

type Variant = (typeof COLOR_VARIANTS)[number]

type VariantCardProps = {
  variant: Variant
  align?: 'start' | 'center'
  className?: string
  children: ReactNode
}

export function VariantCard({ variant, align = 'center', className = '', children }: VariantCardProps) {
  return (
    <div
      className={`flex gap-2 rounded-2xl border bg-white px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3 ${align === 'start' ? 'items-start' : 'items-center'} ${variant.border} ${className}`}
    >
      {children}
    </div>
  )
}

type VariantBadgeProps = {
  variant: Variant
  size?: 'sm' | 'md'
  children: ReactNode
}

export function VariantBadge({ variant, size = 'md', children }: VariantBadgeProps) {
  const sizeClassName =
    size === 'sm' ? 'h-6 w-6 text-xs font-semibold sm:h-7 sm:w-7 sm:text-sm' : 'h-7 w-7 sm:h-9 sm:w-9'

  return (
    <span
      className={`flex ${sizeClassName} shrink-0 items-center justify-center rounded-full ${variant.iconBg} ${variant.iconColor}`}
    >
      {children}
    </span>
  )
}
