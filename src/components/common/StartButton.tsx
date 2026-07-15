import { TiHeartFullOutline } from 'react-icons/ti'

type StartButtonProps = {
  type?: 'button' | 'submit'
  onClick?: () => void
}

export function StartButton({ type = 'button', onClick }: StartButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-2xl bg-brand-pink px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-pink-dark sm:px-8 sm:text-base"
    >
      Comenzar
      <TiHeartFullOutline aria-hidden="true" />
    </button>
  )
}
