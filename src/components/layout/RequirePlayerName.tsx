import { Navigate, Outlet } from 'react-router'
import { getPlayerName } from '../../utils/storage'

export function RequirePlayerName() {
  if (!getPlayerName()) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
