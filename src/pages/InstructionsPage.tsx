import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { FiBookOpen, FiCheckCircle, FiClock, FiLink, FiPlay, FiX } from 'react-icons/fi'
import { TiHeartFullOutline } from 'react-icons/ti'
import { useNavigate } from 'react-router'
import huella from '../assets/huella.png'
import { BackButton } from '../components/common/BackButton'
import { ButtonRow } from '../components/common/ButtonRow'
import { PrimaryButton } from '../components/common/PrimaryButton'
import { VariantBadge, VariantCard } from '../components/common/VariantCard'
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
  const gridRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const fitColumns = () => {
      grid.classList.remove('grid-cols-1')
      grid.classList.add('grid-cols-2')

      if (grid.scrollHeight > grid.clientHeight + 1) {
        grid.classList.remove('grid-cols-2')
        grid.classList.add('grid-cols-1')
      }
    }

    fitColumns()
    const resizeObserver = new ResizeObserver(fitColumns)
    resizeObserver.observe(grid)
    return () => resizeObserver.disconnect()
  }, [])

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 sm:gap-4">
      <div className="mb-2 flex flex-col items-center gap-1 text-center sm:mb-3">
        <img src={huella} alt="" className="h-8 w-auto opacity-70" />
        <h2 className="font-display text-2xl text-ink sm:text-3xl">Instrucciones de juego</h2>
      </div>

      <div
        ref={gridRef}
        className="scrollbar-hidden grid min-h-0 flex-1 grid-cols-2 gap-3 overflow-y-auto [grid-auto-rows:minmax(min-content,1fr)]"
      >
        {INSTRUCTIONS.map(({ icon, title, text }, index) => {
          const variant = getColorVariant(index)

          return (
            <VariantCard key={text} variant={variant}>
              <VariantBadge variant={variant}>{icon}</VariantBadge>
              <p className="text-xs text-ink sm:text-sm">
                {title && <span className="font-semibold">{title} </span>}
                {text}
              </p>
            </VariantCard>
          )
        })}
      </div>

      <ButtonRow
        start={<BackButton />}
        end={
          <PrimaryButton
            onClick={() => navigate('/play', { state: { started: true } })}
            icon={<TiHeartFullOutline aria-hidden="true" />}
          >
            Comenzar
          </PrimaryButton>
        }
      />
    </div>
  )
}
