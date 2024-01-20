import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom"
import { MainFooter, Navbar } from './index'

const RootLayout = () => {

  const { isLoggedIn } = useSelector(state => state.states);
  const nav = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      nav('/sign-in');
    }
  }, [])

  return (
    <div className="flex w-full">
      <Navbar />
      <section className="overflow-y-auto scroll-none h-[100vh] w-full">
        <Outlet />
        <MainFooter />
      </section>
    </div>
  )
}

export default RootLayout