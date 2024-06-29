import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'
import PatientProfiles from './pages/PatientProfiles';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PatientProfiles />} />
      </Routes>
    </Router>
  )
}

export default App
