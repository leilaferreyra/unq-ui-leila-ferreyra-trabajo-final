import type { ReactNode } from 'react'

type PrimaryButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit'
  onClick?: () => void
  icon?: ReactNode
}

export function PrimaryButton({ children, type = 'button', onClick, icon }: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-2xl bg-brand-pink px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-pink-dark sm:px-8 sm:text-base"
    >
      {children}
      {icon}
    </button>
  )
}
