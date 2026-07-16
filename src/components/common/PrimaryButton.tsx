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
      className="flex items-center justify-center gap-2 rounded-2xl bg-brand-pink px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-pink-dark disabled:opacity-60 sm:px-8 sm:text-base"
    >
      {children}
      {icon}
    </button>
  )
}
