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
      setSecondsLeft((prev) => {
        if (prev === null || prev <= 1) {
          clearTick()
          onExpireRef.current()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [durationSeconds, clearTick])

  const stop = useCallback(() => {
    clearTick()
    setSecondsLeft(null)
  }, [clearTick])

  useEffect(() => clearTick, [clearTick])

  return { secondsLeft, restart, stop }
}
