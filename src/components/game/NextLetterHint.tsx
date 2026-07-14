import { FiZap } from 'react-icons/fi'

type NextLetterHintProps = {
  letter: string
}

export function NextLetterHint({ letter }: NextLetterHintProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-hint-border/40 bg-hint-bg px-4 py-3 shadow-sm sm:px-5">
      <FiZap className="shrink-0 text-lg text-stat-violet-icon" aria-hidden="true" />
      <p className="text-sm text-ink sm:text-base">
        Tu próxima palabra debe empezar con: <strong>{letter}</strong>
      </p>
    </div>
  )
}
