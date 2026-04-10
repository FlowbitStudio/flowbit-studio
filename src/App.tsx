import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Propuesta from './pages/Propuesta'
import BriefForm from './components/BriefForm'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Aquí va el website principal */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* Brief de requerimientos */}
        <Route path="/brief" element={<BriefForm />} />

        {/* Propuestas */}
        <Route path="/propuestas/:id" element={<Propuesta />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
