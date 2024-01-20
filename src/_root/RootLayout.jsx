import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom"
import { MainFooter, Navbar, Search } from './index'
import { setIsSearchOpen } from "../features/StateSlice";

const RootLayout = () => {

  const { isLoggedIn , isSearchOpen} = useSelector(state => state.states);
  const nav = useNavigate();
  const disp = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      nav('/sign-in');
    }
  }, [])

  return (
    <div className="flex w-full">
      <div className={`flex ${isSearchOpen? "w-[30rem]":"w-[24rem]"}`}>
      <Navbar />
      <Search />
      </div>
      <section onClick={()=> disp(setIsSearchOpen(false))} className="overflow-y-auto scroll-none h-[100vh] w-full">
        <Outlet />
        <MainFooter />
      </section>
    </div>
  )
}

export default RootLayout