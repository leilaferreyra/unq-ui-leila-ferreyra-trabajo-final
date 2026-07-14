import huella from '../../assets/huella.png'

type EmptyChainStateProps = {
  hasStarted: boolean
}

export function EmptyChainState({ hasStarted }: EmptyChainStateProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-ink/15 px-6 py-4 text-center">
      <img src={huella} alt="" className="h-10 w-auto opacity-50" />
      <p className="font-display text-lg text-ink">Todavía no encadenaste ninguna palabra</p>
      {!hasStarted && (
        <p className="max-w-xs text-sm text-ink/60">
          El contador comenzará a correr cuando ingreses la primer palabra
        </p>
      )}
    </div>
  )
}
