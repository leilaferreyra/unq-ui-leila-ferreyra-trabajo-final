import { BrowserRouter, Routes, Route } from 'react-router'
import { PlayPage } from './pages/PlayPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
