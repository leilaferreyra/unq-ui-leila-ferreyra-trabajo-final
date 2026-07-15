import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { RequireGameResult } from '../components/layout/RequireGameResult'
import { RequireGameStart } from '../components/layout/RequireGameStart'
import { RequirePlayerName } from '../components/layout/RequirePlayerName'
import { RootLayout } from '../components/layout/RootLayout'
import { HomePage } from '../pages/HomePage'
import { InstructionsPage } from '../pages/InstructionsPage'
import { PlayPage } from '../pages/PlayPage'
import { ScorePage } from '../pages/ScorePage'
import { ScoresPage } from '../pages/ScoresPage'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="instrucciones" element={<InstructionsPage />} />
          <Route path="puntajes" element={<ScoresPage />} />
          <Route element={<RequirePlayerName />}>
            <Route element={<RequireGameStart />}>
              <Route path="play" element={<PlayPage />} />
            </Route>
            <Route element={<RequireGameResult />}>
              <Route path="score" element={<ScorePage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
