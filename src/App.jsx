import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Explore, Home, Profile, RootLayout } from './_root'
import { AuthLayout, SignIn, SignUp } from './_auth'
import './globals.css'
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
          <Route path='/profile' element={<Profile />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </main>
  )
}

export default App
