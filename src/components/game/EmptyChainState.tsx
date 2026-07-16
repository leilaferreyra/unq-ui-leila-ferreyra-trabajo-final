import huella from '../../assets/huella.png'

type EmptyChainStateProps = {
  hasStarted: boolean
}

export function EmptyChainState({ hasStarted }: EmptyChainStateProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-1 rounded-3xl border-2 border-dashed border-ink/15 px-4 py-2 text-center sm:gap-2 sm:px-6 sm:py-4">
      <img src={huella} alt="" className="h-6 w-auto opacity-50 sm:h-10" />
      <p className="font-display text-sm text-ink sm:text-lg">Todavía no encadenaste ninguna palabra</p>
      {!hasStarted && (
        <p className="max-w-xs text-xs text-ink/60 sm:text-sm">
          El contador comenzará a correr cuando ingreses la primer palabra
        </p>
      )}
    </div>
  )
}
