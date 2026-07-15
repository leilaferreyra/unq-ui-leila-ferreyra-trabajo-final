import { useNavigate } from 'react-router'
import huella from '../assets/huella.png'
import { BackButton } from '../components/common/BackButton'
import { StartButton } from '../components/common/StartButton'
import { ScoreItem } from '../components/scores/ScoreItem'
import { getTopScores } from '../utils/storage'

export function ScoresPage() {
  const navigate = useNavigate()
  const scores = getTopScores()

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 sm:gap-4">
      <div className="mb-2 flex flex-col items-center gap-1 text-center sm:mb-3">
        <img src={huella} alt="" className="h-8 w-auto opacity-70" />
        <h2 className="font-display text-2xl text-ink sm:text-3xl">Puntajes</h2>
        <p className="text-sm text-ink/70">Los mejores 10 puntajes de mayor a menor</p>
      </div>

      {scores.length > 0 ? (
        <div className="scrollbar-hidden flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto">
          {scores.map((entry, index) => (
            <ScoreItem
              key={`${index}-${entry.date}-${entry.name}`}
              position={index + 1}
              name={entry.name}
              score={entry.score}
              wordsCount={entry.wordsCount}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-ink/15 px-6 py-4 text-center">
          <p className="font-display text-lg text-ink">Todavía no jugaste ninguna partida</p>
          <p className="max-w-xs text-sm text-ink/60">Cuando termines una partida, va a aparecer acá</p>
        </div>
      )}

      <div className="mt-2 flex items-center justify-center gap-3 sm:mt-3">
        <BackButton />
        <StartButton onClick={() => navigate('/play', { state: { started: true } })} />
      </div>
    </div>
  )
}
