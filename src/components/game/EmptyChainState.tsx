export function EmptyChainState() {
  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-ink/15 px-6 py-4 text-center">
      <span className="text-3xl text-ink/30" aria-hidden="true">
        🐾
      </span>
      <p className="font-display text-lg text-ink">Todavía no ingresaste palabras</p>
      <p className="max-w-xs text-sm text-ink/60">
        El contador comenzará a correr cuando ingreses la primer palabra
      </p>
    </div>
  )
}
