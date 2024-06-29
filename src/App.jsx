import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import PatientProfiles from './pages/PatientProfiles';
import PatientProfileDetailPage from './pages/PatientProfileDetailPage';
import NotFound404 from './pages/NotFound404';
import PatientProfileForm from './pages/PatientProfileForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PatientProfiles />} />
        <Route path="/create" element={<PatientProfileForm />} />
        <Route path="/:profileId" element={<PatientProfileDetailPage />} />
        <Route path="/:profileId/edit" element={<PatientProfileForm />} />
        <Route exact path="/*" element={<NotFound404 />} />
      </Routes>
    </Router>
  )
}

export default App
