import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import DatesPage from './pages/Dates'
import PendingDates from './pages/PendingDates'
import PatientsPage from './pages/Pacientes'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/dates' element={<DatesPage />} />
            <Route path='/dates_pending' element={<PendingDates />} />
            <Route path='/' element={<DatesPage />} />
            <Route path='/pacientes' element={<PatientsPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
