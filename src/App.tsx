import { BrowserRouter, Navigate, Routes, Route } from 'react-router'
import { RequirePlayerName } from './components/layout/RequirePlayerName'
import { RootLayout } from './components/layout/RootLayout'
import { HistoryPage } from './pages/HistoryPage'
import { HomePage } from './pages/HomePage'
import { InstructionsPage } from './pages/InstructionsPage'
import { PlayPage } from './pages/PlayPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="instrucciones" element={<InstructionsPage />} />
          <Route path="historial" element={<HistoryPage />} />
          <Route element={<RequirePlayerName />}>
            <Route path="play" element={<PlayPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
