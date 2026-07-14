import { BrowserRouter, Routes, Route } from 'react-router'
import { RootLayout } from './components/layout/RootLayout'
import { PlayPage } from './pages/PlayPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<PlayPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
