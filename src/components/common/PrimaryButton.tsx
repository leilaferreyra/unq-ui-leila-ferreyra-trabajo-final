import type { ReactNode } from 'react'

type PrimaryButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit'
  onClick?: () => void
  icon?: ReactNode
  disabled?: boolean
}

export function PrimaryButton({ children, type = 'button', onClick, icon, disabled }: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="flex h-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-brand-pink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-pink-dark disabled:opacity-60 sm:px-8 sm:text-base"
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  )
}
