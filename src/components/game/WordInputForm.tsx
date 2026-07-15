import { useEffect, useRef, useState, type FormEvent } from 'react'
import { TiHeartFullOutline } from 'react-icons/ti'

type WordInputFormProps = {
  onSubmitWord: (word: string) => Promise<void>
  isValidating: boolean
  hasError: boolean
}

export function WordInputForm({ onSubmitWord, isValidating, hasError }: WordInputFormProps) {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isValidating) {
      inputRef.current?.focus()
    }
  }, [isValidating])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!value.trim()) return

    await onSubmitWord(value)
    setValue('')
  }

  return (
    <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Escribí una palabra..."
        autoFocus
        className={`flex-1 rounded-2xl border bg-white px-5 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-1 disabled:opacity-60 ${
          hasError ? 'border-error-text focus:ring-error-text' : 'border-ink/20 focus:ring-brand-pink'
        }`}
      />
      <button
        type="submit"
        disabled={isValidating}
        className="flex items-center justify-center gap-2 rounded-2xl bg-brand-pink px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-pink-dark disabled:opacity-60"
      >
        Enviar
        <TiHeartFullOutline aria-hidden="true" />
      </button>
    </form>
  )
}
