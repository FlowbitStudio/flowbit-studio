import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Propuesta from './pages/Propuesta'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Aquí va el website principal */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* Propuestas */}
        <Route path="/propuestas/:id" element={<Propuesta />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
