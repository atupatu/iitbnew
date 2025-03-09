import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ItemImageCompliancePage from './pages/ItemImageCompliancePage'
import GlobeVisualization from './components/Globe'
import RegulationsSearch from './pages/RegulationsSearchPage'
import ShowRegulations from './pages/ShowRegulationsPage'
import ComplianceFormPage from './pages/ComplianceFormPage'
import Restrictions from './pages/restrictions'
import AdminPanel from './pages/AdminPanel'
import ComplianceChecker from './pages/dashboard'
import Login from './pages/login'
import Signup from './pages/signup'
import LandingPage from './pages/landing'
import GTranslate from './components/gTranslate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GTranslate />
      <Routes>
        <Route path='/' element={<LandingPage />} /> 
        <Route path='/reports' element={<ComplianceChecker />} /> 
        <Route path='/restrictions' element={<Restrictions/>} />
        <Route path="/regulations" element={<RegulationsSearch />} />
        <Route path="/regulations/:source/:destination" element={<ShowRegulations />} />
        <Route path="/compliance" element={<ComplianceFormPage/>} />
        <Route path="/dashboard" element={<ItemImageCompliancePage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/admin" element={<AdminPanel/>}/>
      </Routes>
    </>
  )
}

export default App
