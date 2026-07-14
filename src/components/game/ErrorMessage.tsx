import { FiAlertCircle } from 'react-icons/fi'

type ErrorMessageProps = {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p className="flex items-center gap-1.5 text-sm text-error-text">
      <FiAlertCircle className="shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}
