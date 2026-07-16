import { useCallback, useEffect, useRef, useState } from 'react'

export function useTimer(durationSeconds: number, onExpire: () => void) {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null)
  const intervalRef = useRef<number | null>(null)
  const onExpireRef = useRef(onExpire)

  useEffect(() => {
    onExpireRef.current = onExpire
  }, [onExpire])

  const clearTick = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const restart = useCallback(() => {
    clearTick()
    setSecondsLeft(durationSeconds)
    intervalRef.current = window.setInterval(() => {
      setSecondsLeft((prev) => (prev === null ? prev : Math.max(prev - 1, 0)))
    }, 1000)
  }, [durationSeconds, clearTick])

  useEffect(() => {
    if (secondsLeft === 0) {
      clearTick()
      onExpireRef.current()
    }
  }, [secondsLeft, clearTick])

  useEffect(() => clearTick, [clearTick])

  return { secondsLeft, restart }
}
