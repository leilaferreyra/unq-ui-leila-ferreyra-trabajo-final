import { Navigate, Outlet, useLocation } from 'react-router'
import type { GameResult } from '../../types/game'

function isGameResult(state: unknown): state is GameResult {
  return (
    typeof state === 'object' &&
    state !== null &&
    typeof (state as GameResult).score === 'number' &&
    typeof (state as GameResult).wordsCount === 'number'
  )
}

export function RequireGameResult() {
  const location = useLocation()

  if (!isGameResult(location.state)) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
