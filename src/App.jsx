import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Chat, CreateComponent, Explore, Home, NotFound, PostPage, Profile, Reels, RootLayout } from './_root/index'
import { AuthLayout, SignIn, SignUp } from './_auth'
import './globals.css'
import Test from './_root/pages/test/Test'
import Test1 from './_root/pages/test/Test1'
function App() {

  return (
    <main>
      <CreateComponent />
      <PostPage />
      <Routes>
        <Route element={<AuthLayout />} >
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Route>

        <Route element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/watch' element={<Reels />} />
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
