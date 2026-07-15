import type { ReactNode } from 'react'
import { FaTrophy } from 'react-icons/fa'
import { FiBookOpen, FiClock, FiLink, FiRefreshCw, FiStar, FiX } from 'react-icons/fi'
import { IoHourglassOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router'
import huella from '../assets/huella.png'
import { BackButton } from '../components/common/BackButton'
import { StartButton } from '../components/common/StartButton'
import { getColorVariant } from '../utils/colorVariants'

type Instruction = {
  icon: ReactNode
  title?: string
  text: string
}

const INSTRUCTIONS: Instruction[] = [
  {
    icon: <FiLink aria-hidden="true" />,
    title: 'Encadená palabras:',
    text: 'cada palabra nueva tiene que empezar con la última letra de la palabra anterior.',
  },
  {
    icon: <FiClock aria-hidden="true" />,
    text: 'Tenés 15 segundos por turno para escribir tu palabra.',
  },
  {
    icon: <FiRefreshCw aria-hidden="true" />,
    title: 'Cada acierto reinicia el reloj:',
    text: 'si la palabra es válida, volvés a tener 15 segundos completos para la siguiente.',
  },
  {
    icon: <IoHourglassOutline aria-hidden="true" />,
    text: 'Si se acaba el tiempo, termina la partida.',
  },
  {
    icon: <FiX aria-hidden="true" />,
    title: 'No repitas palabras:',
    text: 'si ya la usaste en esta partida, no vale.',
  },
  {
    icon: <FiBookOpen aria-hidden="true" />,
    title: 'Tiene que existir:',
    text: 'la palabra se valida contra un diccionario real.',
  },
  {
    icon: <FiStar aria-hidden="true" />,
    text: 'Sumás puntos según la longitud de cada palabra que encadenás.',
  },
  {
    icon: <FaTrophy aria-hidden="true" />,
    text: 'Al terminar, ves tu puntaje final y cuántas palabras lograste encadenar.',
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
          const variant = getColorVariant(index)

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

      <div className="mt-2 flex items-center justify-center gap-3 sm:mt-3">
        <BackButton />
        <StartButton onClick={() => navigate('/play')} />
      </div>
    </div>
  )
}
