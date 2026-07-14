import backgroundImage from '../assets/background.png'
import { GameHeader } from '../components/game/GameHeader'
import { StatsBar } from '../components/game/StatsBar'
import { WordChain } from '../components/game/WordChain'
import { EmptyChainState } from '../components/game/EmptyChainState'
import { NextLetterHint } from '../components/game/NextLetterHint'
import { WordInputForm } from '../components/game/WordInputForm'
import { ErrorMessage } from '../components/game/ErrorMessage'
import { GameOverPanel } from '../components/game/GameOverPanel'
import { Panel } from '../components/common/Panel'
import { useWordChainGame } from '../hooks/useWordChainGame'

export function PlayPage() {
  const { words, score, status, error, isValidating, secondsLeft, nextLetter, submitWord, resetGame } =
    useWordChainGame()

  const isFinished = status === 'finished'

  return (
    <div
      className="flex h-screen flex-col overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-4 sm:px-6 sm:py-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto flex w-full max-w-2xl min-h-0 flex-1 flex-col gap-3">
        <GameHeader />

        <Panel>
          {isFinished ? (
            <GameOverPanel score={score} wordsCount={words.length} onPlayAgain={resetGame} />
          ) : (
            <>
              <StatsBar secondsLeft={secondsLeft} score={score} wordsCount={words.length} />

              <div className="flex min-h-0 flex-1 flex-col">
                {words.length > 0 ? (
                  <WordChain words={words} />
                ) : (
                  <EmptyChainState hasStarted={status !== 'idle'} />
                )}
              </div>

              {nextLetter && <NextLetterHint letter={nextLetter} />}

              <div>
                <WordInputForm
                  onSubmitWord={submitWord}
                  disabled={isFinished}
                  isValidating={isValidating}
                  hasError={Boolean(error)}
                />

                {error && (
                  <div className="mt-1.5">
                    <ErrorMessage message={error} />
                  </div>
                )}
              </div>
            </>
          )}
        </Panel>
      </div>
    </div>
  )
}
