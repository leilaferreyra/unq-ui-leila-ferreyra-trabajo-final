import { FiAlertCircle } from 'react-icons/fi'

type ErrorMessageProps = {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-error-bg px-4 py-3 sm:px-5">
      <FiAlertCircle className="shrink-0 text-lg text-error-text" aria-hidden="true" />
      <p className="text-sm text-error-text">{message}</p>
    </div>
  )
}
