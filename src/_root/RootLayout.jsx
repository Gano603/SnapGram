import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { MainFooter, Navbar, NotifiactionBar, Search } from './index'
import { setIsNavbarMinimized, setIsNotificationOpen, setIsSearchOpen } from "../features/StateSlice";
import LeftPanel from "./pages/Chat/components/LeftPanel";

const RootLayout = () => {

  const { isLoggedIn } = useSelector(state => state.states);
  const { id } = useSelector(state => state.userData);
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
    <div className="flex">
      <Navbar />
      <Search key={1} />
      <NotifiactionBar key={2} />
      <LeftPanel id={id} />
      <section onClick={() => location.pathname !== '/inbox' ? stateChange(false, false, false) : ""} className="overflow-y-auto scroll-none h-[100vh] w-full">
        <Outlet />
        <MainFooter />
      </section>
    </div>
  )
}

export default RootLayout