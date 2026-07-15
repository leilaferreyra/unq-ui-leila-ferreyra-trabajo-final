import { FiLink, FiStar, FiUser } from 'react-icons/fi'
import { getColorVariant } from '../../utils/colorVariants'

type HistoryItemProps = {
  position: number
  name: string
  score: number
  wordsCount: number
}

export function HistoryItem({ position, name, score, wordsCount }: HistoryItemProps) {
  const variant = getColorVariant(position - 1)

  return (
    <div className={`flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 ${variant.border}`}>
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${variant.iconBg} ${variant.iconColor}`}
      >
        {position}
      </span>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${variant.iconBg} ${variant.iconColor}`}
      >
        <FiUser aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1 truncate font-semibold text-ink">{name}</span>
      <span className={`flex shrink-0 items-center gap-1 text-sm font-semibold ${variant.iconColor}`}>
        <FiStar aria-hidden="true" />
        {score} puntos
      </span>
      <span className="flex shrink-0 items-center gap-1 text-sm text-ink/60">
        <FiLink aria-hidden="true" />
        {wordsCount} palabras
      </span>
    </div>
  )
}
