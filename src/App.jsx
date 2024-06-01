import { useState } from 'react'

import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import DatesPage from './pages/Dates'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/Register' element={<RegisterPage/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path='/dates' element={<DatesPage/>}/>
            <Route path='/dates_pending' element={<DatesPage/>}/>
            <Route path='/' element={<DatesPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
