import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { FaHeart } from 'react-icons/fa'
import { FiAward, FiEdit2, FiHelpCircle, FiUser } from 'react-icons/fi'
import huella from '../assets/huella.png'
import { StartButton } from '../components/common/StartButton'
import { getPlayerName, savePlayerName } from '../utils/storage'

const DEFAULT_NAME = 'Anónimo'

export function HomePage() {
  const navigate = useNavigate()
  const [name, setName] = useState(() => getPlayerName() ?? DEFAULT_NAME)

  const handleStart = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    savePlayerName(name.trim() || DEFAULT_NAME)
    navigate('/play', { state: { started: true } })
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col justify-center gap-3 sm:gap-4">
      <div className="mb-2 flex flex-col items-center gap-1 text-center sm:mb-3">
        <img src={huella} alt="" className="h-12 w-auto opacity-70" />
        <h2 className="font-display text-3xl text-ink">¡Comencemos a jugar!</h2>
        <p className="text-m text-ink/70">Ingresá tu nombre para empezar</p>
      </div>

      <form className="contents" onSubmit={handleStart}>
        <label className="flex items-center gap-3 rounded-2xl border border-ink/20 bg-white px-4 py-2.5 focus-within:ring-1 focus-within:ring-brand-pink">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stat-pink text-stat-pink-icon">
            <FiUser aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs text-ink/60">Tu nombre</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={DEFAULT_NAME}
              autoFocus
              className="w-full min-w-0 font-display text-base text-ink focus:outline-none sm:text-lg"
            />
          </span>
          <FiEdit2 className="shrink-0 text-brand-pink" aria-hidden="true" />
        </label>

        <div className="mb-2 self-center sm:mb-3">
          <StartButton type="submit" />
        </div>
      </form>

      <div className="mb-2 flex items-center gap-3 sm:mb-3" aria-hidden="true">
        <div className="h-px flex-1 bg-ink/10" />
        <FaHeart className="text-brand-pink/50" />
        <div className="h-px flex-1 bg-ink/10" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => navigate('/instrucciones')}
          className="flex min-w-0 items-center gap-1.5 rounded-2xl border border-stat-violet-icon/30 bg-stat-violet/40 py-2.5 pr-3 pl-2.5 text-left transition-colors hover:bg-stat-violet/60 sm:gap-2 sm:pr-4"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stat-violet text-stat-violet-icon sm:h-9 sm:w-9">
            <FiHelpCircle aria-hidden="true" />
          </span>
          <span className="min-w-0 truncate text-sm font-semibold text-ink sm:text-base">Instrucciones</span>
        </button>
        <button
          type="button"
          onClick={() => navigate('/puntajes')}
          className="flex min-w-0 items-center gap-1.5 rounded-2xl border border-chain-amber-icon/30 bg-chain-amber/40 py-2.5 pr-3 pl-2.5 text-left transition-colors hover:bg-chain-amber/60 sm:gap-2 sm:pr-4"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-chain-amber text-chain-amber-icon sm:h-9 sm:w-9">
            <FiAward aria-hidden="true" />
          </span>
          <span className="min-w-0 truncate text-sm font-semibold text-ink sm:text-base">Puntajes</span>
        </button>
      </div>
    </div>
  )
}
