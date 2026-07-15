import { useNavigate } from 'react-router'
import { FiArrowLeft } from 'react-icons/fi'

export function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate('/')}
      className="flex items-center justify-center gap-2 rounded-2xl border border-brand-pink bg-white px-6 py-3 font-semibold text-brand-pink transition-colors hover:bg-brand-pink/10"
    >
      <FiArrowLeft aria-hidden="true" />
      Volver al inicio
    </button>
  )
}
