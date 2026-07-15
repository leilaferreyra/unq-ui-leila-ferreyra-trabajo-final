import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { StatsBar } from '../components/game/StatsBar'
import { WordChain } from '../components/game/WordChain'
import { EmptyChainState } from '../components/game/EmptyChainState'
import { NextLetterHint } from '../components/game/NextLetterHint'
import { WordInputForm } from '../components/game/WordInputForm'
import { ErrorMessage } from '../components/game/ErrorMessage'
import { useWordChainGame } from '../hooks/useWordChainGame'
import type { GameResult } from '../types/game'

export function PlayPage() {
  const navigate = useNavigate()
  const { words, score, status, error, isValidating, secondsLeft, nextLetter, submitWord } = useWordChainGame()

  const isFinished = status === 'finished'

  useEffect(() => {
    if (isFinished) {
      const result: GameResult = { score, wordsCount: words.length }
      navigate('/score', { state: result, replace: true })
    }
  }, [isFinished, score, words.length, navigate])

  if (isFinished) {
    return null
  }

  return (
    <>
      <StatsBar secondsLeft={secondsLeft} score={score} wordsCount={words.length} />

      <div className="flex min-h-0 flex-1 flex-col">
        {words.length > 0 ? <WordChain words={words} /> : <EmptyChainState hasStarted={status !== 'idle'} />}
      </div>

      {nextLetter && <NextLetterHint letter={nextLetter} />}

      <div>
        <WordInputForm onSubmitWord={submitWord} isValidating={isValidating} hasError={Boolean(error)} />

        {error && (
          <div className="mt-1.5">
            <ErrorMessage message={error} />
          </div>
        )}
      </div>
    </>
  )
}
