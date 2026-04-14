import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import Propuesta from './pages/Propuesta'
import BriefForm from './components/BriefForm'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/brief" element={<BriefForm />} />
        <Route path="/propuestas/:id" element={<Propuesta />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
