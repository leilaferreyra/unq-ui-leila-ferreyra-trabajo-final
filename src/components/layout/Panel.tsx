import type { ReactNode } from 'react'

type PanelProps = {
  children: ReactNode
}

export function Panel({ children }: PanelProps) {
  return (
    <div className="scrollbar-hidden flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto rounded-3xl bg-panel/90 p-4 shadow-sm sm:gap-4 sm:p-6">
      {children}
    </div>
  )
}
