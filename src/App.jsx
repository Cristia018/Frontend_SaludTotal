import { useState } from 'react'

import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import DatesPage from './pages/Dates'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/Register' element={<RegisterPage/>}/>
          <Route path='/dates' element={<DatesPage/>}/>

        </Routes>
      </BrowserRouter>

      {/* <LoginPage></LoginPage> */}
      {/* <RegisterPage></RegisterPage> */}
      <DatesPage></DatesPage>
    </>
  )
}

export default App
