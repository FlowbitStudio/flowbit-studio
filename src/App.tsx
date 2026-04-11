import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Propuesta from './pages/Propuesta'
import BriefForm from './components/BriefForm'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brief" element={<BriefForm />} />
        <Route path="/propuestas/:id" element={<Propuesta />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
