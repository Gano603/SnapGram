import React,{ useEffect } from "react";
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

const AuthLayout = () => {

  const { isLoggedIn } = useSelector(state => state.states);
  const nav = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      nav('/');
    }
  }, [])


  return (
    <div className="w-full h-screen flex justify-between">
      <Outlet />
      <div className="w-[80vw] h-full">
        <img className="h-full" src="/assets/images/side-img.svg" alt="Side Hero Image" />
      </div>

    </div>
  )
}
export default AuthLayout