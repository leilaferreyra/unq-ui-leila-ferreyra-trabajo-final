import { useLocation, useNavigate } from 'react-router'
import { GameOverPanel } from '../components/game/GameOverPanel'
import type { GameResult } from '../types/game'

export function ScorePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { score, wordsCount } = location.state as GameResult

  return (
    <GameOverPanel
      score={score}
      wordsCount={wordsCount}
      onPlayAgain={() => navigate('/play', { state: { started: true } })}
    />
  )
}
