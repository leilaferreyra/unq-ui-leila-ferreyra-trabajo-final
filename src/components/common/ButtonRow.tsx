import type { ReactNode } from 'react'

type ButtonRowProps = {
  start: ReactNode
  end: ReactNode
}

export function ButtonRow({ start, end }: ButtonRowProps) {
  return (
    <div className="mt-2 grid w-full grid-cols-2 gap-3 sm:mt-3">
      <div className="flex min-w-0 justify-end">{start}</div>
      <div className="flex min-w-0 justify-start">{end}</div>
    </div>
  )
}
