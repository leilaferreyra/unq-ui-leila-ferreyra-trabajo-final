export function WordInputForm() {
  return (
    <form className="flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        placeholder="Escribí una palabra..."
        className="flex-1 rounded-full border border-ink/10 bg-white px-5 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-brand-pink"
      />
      <button
        type="submit"
        className="rounded-full bg-brand-pink px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-pink-dark"
      >
        Enviar
      </button>
    </form>
  )
}
