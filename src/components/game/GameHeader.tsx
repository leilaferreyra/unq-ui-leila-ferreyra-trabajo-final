import { FiHeart } from 'react-icons/fi'
import miloCat from '../../assets/milo-cat.png'

export function GameHeader() {
  return (
    <header className="flex shrink-0 items-center justify-center gap-2 text-center sm:gap-3">
      <img src={miloCat} alt="Milo, el gato mascota del juego" className="h-14 w-auto sm:h-20" />
      <div className="flex flex-col items-start text-left">
        <h1 className="font-display text-2xl text-ink sm:text-4xl">Palabras Encadenadas</h1>
        <p className="flex items-center gap-1 text-sm text-ink/70 sm:text-base">
          Pensá rápido y encadená las palabras <FiHeart className="text-brand-pink" aria-hidden="true" />
        </p>
      </div>
    </header>
  )
}
