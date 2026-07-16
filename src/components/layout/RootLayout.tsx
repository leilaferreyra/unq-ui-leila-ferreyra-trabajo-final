import { Outlet } from 'react-router'
import backgroundImage from '../../assets/background.png'
import { Panel } from './Panel'
import { GameHeader } from '../game/GameHeader'

export function RootLayout() {
  return (
    <div
      className="flex h-screen flex-col overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-4 sm:px-6 sm:py-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto flex w-full max-w-2xl min-h-0 flex-1 flex-col gap-3">
        <GameHeader />
        <Panel>
          <Outlet />
        </Panel>
      </div>
    </div>
  )
}
