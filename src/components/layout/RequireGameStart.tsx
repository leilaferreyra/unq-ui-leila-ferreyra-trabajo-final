import { Navigate, Outlet, useLocation } from 'react-router'
import type { PlayNavigationState } from '../../types/game'

function isPlayNavigationState(state: unknown): state is PlayNavigationState {
  return typeof state === 'object' && state !== null && (state as PlayNavigationState).started === true
}

export function RequireGameStart() {
  const location = useLocation()

  if (!isPlayNavigationState(location.state)) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
