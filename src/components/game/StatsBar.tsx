import { FiClock, FiLink, FiStar } from 'react-icons/fi'
import { StatCard } from './StatCard'

type StatsBarProps = {
  secondsLeft: number | null
  score: number
  wordsCount: number
}

const LOW_TIME_THRESHOLD = 5

export function StatsBar({ secondsLeft, score, wordsCount }: StatsBarProps) {
  const isLowOnTime = secondsLeft !== null && secondsLeft <= LOW_TIME_THRESHOLD

  return (
    <div className="flex items-center rounded-2xl bg-card px-1 py-2 shadow-sm">
      <StatCard
        label="Tiempo"
        value={secondsLeft !== null ? <>{secondsLeft}<span className="text-base sm:text-lg">s</span></> : '--'}
        iconBgClassName={isLowOnTime ? 'bg-error-bg' : 'bg-stat-pink'}
        iconColorClassName={isLowOnTime ? 'text-error-text' : 'text-stat-pink-icon'}
        icon={<FiClock aria-hidden="true" />}
      />
      <StatCard
        label="Puntaje"
        value={<>{score}<span className="text-base sm:text-lg"> pts</span></>}
        iconBgClassName="bg-stat-violet"
        iconColorClassName="text-stat-violet-icon"
        icon={<FiStar aria-hidden="true" />}
        withDivider
      />
      <StatCard
        label="Palabras"
        value={wordsCount}
        iconBgClassName="bg-chain-amber"
        iconColorClassName="text-chain-amber-icon"
        icon={<FiLink aria-hidden="true" />}
        withDivider
      />
    </div>
  )
}
