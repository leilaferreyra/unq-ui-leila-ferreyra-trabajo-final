import type { ReactNode } from 'react'

type StatCardProps = {
  icon: ReactNode
  label: string
  value: ReactNode
  iconBgClassName: string
  iconColorClassName: string
}

export function StatCard({ icon, label, value, iconBgClassName, iconColorClassName }: StatCardProps) {
  return (
    <div className="flex flex-1 items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-md sm:px-5 sm:py-4">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${iconBgClassName} ${iconColorClassName}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-ink/70 sm:text-sm">{label}</p>
        <p className="font-display text-xl text-ink sm:text-2xl">{value}</p>
      </div>
    </div>
  )
}
