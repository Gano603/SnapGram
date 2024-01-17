import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './_root/pages'
import './globals.css'
import RootLayout from './_root/RootLayout'
import AuthLayout from './_auth/AuthLayout'
import { SignIn, SignUp } from './_auth/pages'
import NotFound from './_root/pages/NotFound/NotFound'
function App() {

  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />} >
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Route>

        <Route element={<RootLayout />} >
          <Route index element={<Home />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
