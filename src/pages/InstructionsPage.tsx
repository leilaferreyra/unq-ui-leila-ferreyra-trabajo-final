import type { ReactNode } from 'react'
import { FiBookOpen, FiCheckCircle, FiClock, FiLink, FiX, FiPlay} from 'react-icons/fi'
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
    text: 'La nueva palabra debe empezar con la última letra de la anterior.',
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
    text: 'No podés usar una palabra que ya hayas ingresado.',
  },
  {
    icon: <FiBookOpen aria-hidden="true" />,
    title: 'Palabras reales:',
    text: 'Todas las palabras deben existir en el diccionario.',
  },
  {
  icon: <FiPlay aria-hidden="true" />,
  title: 'Arranque:',
  text: 'El reloj empieza a correr con tu primera palabra, sea válida o no.',
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
        <StartButton onClick={() => navigate('/play', { state: { started: true } })} />
      </div>
    </div>
  )
}
