import { FiLink, FiStar } from 'react-icons/fi'
import { BackButton } from '../common/BackButton'
import { ButtonRow } from '../common/ButtonRow'
import { PrimaryButton } from '../common/PrimaryButton'
import { StatCard } from './StatCard'

type GameOverPanelProps = {
  score: number
  wordsCount: number
  onPlayAgain: () => void
}

export function GameOverPanel({ score, wordsCount, onPlayAgain }: GameOverPanelProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center sm:gap-4">
      <h2 className="font-display text-xl text-ink sm:text-3xl">¡Partida finalizada!</h2>

      <div className="flex w-full max-w-sm items-center rounded-2xl bg-card px-1 py-1 shadow-sm sm:py-2">
        <StatCard
          label="Puntos"
          value={score}
          iconBgClassName="bg-stat-violet"
          iconColorClassName="text-stat-violet-icon"
          icon={<FiStar aria-hidden="true" />}
        />
        <StatCard
          label="Palabras encadenadas"
          value={wordsCount}
          iconBgClassName="bg-chain-amber"
          iconColorClassName="text-chain-amber-icon"
          icon={<FiLink aria-hidden="true" />}
          withDivider
        />
      </div>

      <ButtonRow
        start={<BackButton />}
        end={<PrimaryButton onClick={onPlayAgain}>Jugar de nuevo</PrimaryButton>}
      />
    </div>
  )
}
