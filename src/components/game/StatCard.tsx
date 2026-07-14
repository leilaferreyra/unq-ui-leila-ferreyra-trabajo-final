import type { ReactNode } from 'react'

type StatCardProps = {
  icon: ReactNode
  label: string
  value: ReactNode
  iconBgClassName: string
  iconColorClassName: string
  withDivider?: boolean
}

export function StatCard({ icon, label, value, iconBgClassName, iconColorClassName, withDivider }: StatCardProps) {
  return (
    <div
      className={`flex min-w-0 flex-1 items-center gap-2 px-2 py-1 sm:gap-3 sm:px-5 ${withDivider ? 'border-l border-ink/10' : ''}`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm sm:h-11 sm:w-11 sm:text-base ${iconBgClassName} ${iconColorClassName}`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[0.65rem] leading-tight text-ink/70 sm:text-sm">{label}</p>
        <p className={`truncate font-display text-base sm:text-2xl ${iconColorClassName}`}>{value}</p>
      </div>
    </div>
  )
}
