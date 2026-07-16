import { useNavigate } from 'react-router'
import { FiArrowLeft } from 'react-icons/fi'

export function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate('/')}
      className="flex h-full min-w-0 items-center justify-center gap-2 rounded-2xl border border-brand-pink bg-white px-4 py-3 text-sm font-semibold text-brand-pink transition-colors hover:bg-brand-pink/10 sm:px-6 sm:text-base"
    >
      <FiArrowLeft className="shrink-0" aria-hidden="true" />
      <span>Volver al inicio</span>
    </button>
  )
}
