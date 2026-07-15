import type { ReactNode } from 'react'
import { useNavigate } from 'react-router'
import { FaTrophy } from 'react-icons/fa'
import { FiArrowLeft, FiBookOpen, FiCheckCircle, FiClock, FiLink, FiX } from 'react-icons/fi'
import huella from '../assets/huella.png'

const VARIANTS = [
  { border: 'border-stat-violet-icon/30', iconBg: 'bg-stat-violet', iconColor: 'text-stat-violet-icon' },
  { border: 'border-stat-pink-icon/30', iconBg: 'bg-stat-pink', iconColor: 'text-stat-pink-icon' },
  { border: 'border-chain-amber-icon/30', iconBg: 'bg-chain-amber', iconColor: 'text-chain-amber-icon' },
] as const

type Instruction = {
  icon: ReactNode
  title?: string
  text: string
}

const INSTRUCTIONS: Instruction[] = [
  {
    icon: <FiLink aria-hidden="true" />,
    title: 'Encadená palabras:',
    text: 'La nueva debe empezar con la última letra de la anterior.',
  },
  {
    icon: <FiClock aria-hidden="true" />,
    title: 'Tiempo límite:',
    text: 'Tenés 15 segundos por turno. Si se acaba, termina la partida.',
  },
  {
    icon: <FiCheckCircle aria-hidden="true" />,
    title: 'Aciertos:',
    text: 'Cada palabra válida reinicia el reloj y suma puntos según su longitud.',
  },
  {
    icon: <FiX aria-hidden="true" />,
    title: 'Sin repetir:',
    text: 'No podés usar una palabra que ya haya salido.',
  },
  {
    icon: <FiBookOpen aria-hidden="true" />,
    title: 'Palabras reales:',
    text: 'Todas deben existir en el diccionario.',
  },
  {
    icon: <FaTrophy aria-hidden="true" />,
    title: 'Final:',
    text: 'Al terminar, verás tu puntaje y cantidad de palabras encadenadas.',
  },
]

export function InstructionsPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 sm:gap-4">
      <div className="mb-2 flex flex-col items-center gap-1 text-center sm:mb-3">
        <img src={huella} alt="" className="h-8 w-auto opacity-70" />
        <h2 className="font-display text-2xl text-ink sm:text-3xl">Instrucciones de juego</h2>
      </div>

      <div className="scrollbar-hidden grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-2">
        {INSTRUCTIONS.map(({ icon, title, text }, index) => {
          const variant = VARIANTS[index % VARIANTS.length]

          return (
            <div
              key={text}
              className={`flex items-start gap-3 rounded-2xl border bg-white px-4 py-3 ${variant.border}`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${variant.iconBg} ${variant.iconColor}`}
              >
                {icon}
              </span>
              <p className="text-sm text-ink">
                {title && <span className="font-semibold">{title} </span>}
                {text}
              </p>
            </div>
          )
        })}
      </div>

      <button
        type="button"
        onClick={() => navigate('/')}
        className="mt-2 flex items-center justify-center gap-2 self-center rounded-2xl bg-brand-pink px-10 py-3 font-semibold text-white transition-colors hover:bg-brand-pink-dark sm:mt-3"
      >
        <FiArrowLeft aria-hidden="true" />
        Volver
      </button>
    </div>
  )
}
