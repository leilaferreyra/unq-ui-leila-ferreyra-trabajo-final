import { useEffect, useRef, useState, type FormEvent } from 'react'
import { TiHeartFullOutline } from 'react-icons/ti'
import { PrimaryButton } from '../common/PrimaryButton'

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
      <PrimaryButton type="submit" disabled={isValidating} icon={<TiHeartFullOutline aria-hidden="true" />}>
        Enviar
      </PrimaryButton>
    </form>
  )
}
