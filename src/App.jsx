import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Chat, CreateComponent, Explore, Home, NotFound, Profile, RootLayout } from './_root'
import { AuthLayout, SignIn, SignUp } from './_auth'
import './globals.css'
import Test from './_root/pages/test/Test'
import Test1 from './_root/pages/test/Test1'
function App() {

  return (
    <main>
      <CreateComponent />
      <Routes>
        <Route element={<AuthLayout />} >
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Route>

        <Route element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/inbox' element={<Chat />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </main>
  )
}

export default App
