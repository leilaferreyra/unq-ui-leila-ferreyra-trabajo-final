import { FiLink, FiStar, FiUser } from 'react-icons/fi'
import { VariantBadge, VariantCard } from '../common/VariantCard'
import { getColorVariant } from '../../utils/colorVariants'

type ScoreItemProps = {
  position: number
  name: string
  score: number
  wordsCount: number
}

export function ScoreItem({ position, name, score, wordsCount }: ScoreItemProps) {
  const variant = getColorVariant(position - 1)

  return (
    <VariantCard variant={variant}>
      <VariantBadge variant={variant} size="sm">
        {position}
      </VariantBadge>
      <VariantBadge variant={variant}>
        <FiUser aria-hidden="true" />
      </VariantBadge>
      <span className="min-w-0 flex-1 truncate text-sm font-semibold text-ink sm:text-base">{name}</span>
      <span className={`flex shrink-0 items-center gap-1 text-xs font-semibold sm:text-sm ${variant.iconColor}`}>
        <FiStar aria-hidden="true" />
        {score}
        <span className="hidden sm:inline"> puntos</span>
      </span>
      <span className="flex shrink-0 items-center gap-1 text-xs text-ink/60 sm:text-sm">
        <FiLink aria-hidden="true" />
        {wordsCount}
        <span className="hidden sm:inline"> palabras</span>
      </span>
    </VariantCard>
  )
}
