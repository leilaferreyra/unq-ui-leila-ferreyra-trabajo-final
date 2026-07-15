import { FiLink, FiStar } from 'react-icons/fi'
import huella from '../../assets/huella.png'
import { BackButton } from '../common/BackButton'
import { StatCard } from './StatCard'

type GameOverPanelProps = {
  score: number
  wordsCount: number
  onPlayAgain: () => void
}

export function GameOverPanel({ score, wordsCount, onPlayAgain }: GameOverPanelProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <img src={huella} alt="" className="h-12 w-auto" />
      <h2 className="font-display text-2xl text-ink sm:text-3xl">¡Partida finalizada!</h2>

      <div className="flex w-full max-w-sm items-center rounded-2xl bg-card px-1 py-2 shadow-sm">
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

      <div className="mt-2 flex items-center gap-3">
        <BackButton />
        <button
          type="button"
          onClick={onPlayAgain}
          className="rounded-2xl bg-brand-pink px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-pink-dark"
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  )
}
