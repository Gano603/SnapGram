import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { MainFooter, Navbar, NotifiactionBar, Search } from './index'
import { setIsNavbarMinimized, setIsNotificationOpen, setIsSearchOpen } from "../features/StateSlice";
import { AnimatePresence } from "framer-motion";
import LeftPanel from "./pages/Chat/components/LeftPanel";

const RootLayout = () => {

  const { isLoggedIn, isSearchOpen, isNotificationOpen } = useSelector(state => state.states);
  const nav = useNavigate();
  const location = useLocation();
  const disp = useDispatch();

  const stateChange = (search, notification, navbarMinimized) => {
    disp(setIsSearchOpen(search))
    disp(setIsNotificationOpen(notification))
    disp(setIsNavbarMinimized(navbarMinimized))
  }

  useEffect(() => {
    if (!isLoggedIn) {
      nav('/sign-in');
    }
  }, [])

  return (
    <div className="flex w-full">
      <div className='flex min-w-[30rem]'>
        <Navbar />
        <div className="w-full h-screen relative">
          <AnimatePresence>
            <Search key={1} />
            <NotifiactionBar key={2} />
            <LeftPanel id={"fluffyguy123"} />
          </AnimatePresence>
        </div>
      </div>
      <section onClick={() => location.pathname !== '/inbox' ? stateChange(false, false, false) : ""} className="overflow-y-auto scroll-none h-[100vh] w-full">
        <Outlet />
        <MainFooter />
      </section>
    </div>
  )
}

export default RootLayout