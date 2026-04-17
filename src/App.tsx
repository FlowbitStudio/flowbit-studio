import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import Home from './pages/Home'
import Propuesta from './pages/Propuesta'
import BriefForm from './components/BriefForm'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/home" element={<Home />} />
        <Route path="/brief" element={<BriefForm />} />
        <Route path="/propuestas/:id" element={<Propuesta />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
