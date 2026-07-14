import { BrowserRouter, Navigate, Routes, Route } from 'react-router'
import { RequirePlayerName } from './components/layout/RequirePlayerName'
import { RootLayout } from './components/layout/RootLayout'
import { HomePage } from './pages/HomePage'
import { PlayPage } from './pages/PlayPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
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
