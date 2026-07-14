import { FiLink } from 'react-icons/fi'
import backgroundImage from '../assets/background.png'
import { GameHeader } from '../components/game/GameHeader'
import { StatsBar } from '../components/game/StatsBar'
import { WordChain } from '../components/game/WordChain'
import { EmptyChainState } from '../components/game/EmptyChainState'
import { NextLetterHint } from '../components/game/NextLetterHint'
import { WordInputForm } from '../components/game/WordInputForm'
import { ErrorMessage } from '../components/game/ErrorMessage'
import { Panel } from '../components/common/Panel'

// Datos de ejemplo mientras se diseña la pantalla. TODO: reemplazar por el estado real del juego.
const MOCK_WORDS = ['casa', 'árbol', 'luna', 'amistad', 'acordeón']

export function PlayPage() {
  const hasWords = MOCK_WORDS.length > 0

  return (
    <div
      className="flex h-screen flex-col overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-4 sm:px-6 sm:py-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto flex w-full max-w-2xl min-h-0 flex-1 flex-col gap-3">
        <GameHeader />

        <Panel>
          <StatsBar />

          <div className="flex min-h-0 flex-1 flex-col">
            <h2 className="mb-2 flex shrink-0 items-center gap-2 text-sm font-semibold text-ink/80">
              <FiLink aria-hidden="true" /> Cadena de palabras
            </h2>
            {hasWords ? <WordChain words={MOCK_WORDS} /> : <EmptyChainState />}
          </div>

          <NextLetterHint letter="A" />

          <WordInputForm />

          <ErrorMessage message="La palabra ya fue utilizada" />
        </Panel>
      </div>
    </div>
  )
}
