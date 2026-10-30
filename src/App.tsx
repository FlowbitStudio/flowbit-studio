import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import Home from './pages/Home'
import Sitio from './pages/Sitio'
import Proyecto from './pages/Proyecto'
import Propuesta from './pages/Propuesta'
import Kickoff from './pages/Kickoff'
import BriefForm from './components/BriefForm'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sitio />} />
        <Route path="/proyectos/:slug" element={<Proyecto />} />
        <Route path="/proximamente" element={<ComingSoon />} />
        <Route path="/home" element={<Home />} />
        <Route path="/brief" element={<BriefForm />} />
        <Route path="/propuestas/:id" element={<Propuesta />} />
        <Route path="/kickoff/:id" element={<Kickoff />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
