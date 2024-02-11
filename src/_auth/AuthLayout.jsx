import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { fetchData } from "../handlers/handlers";

const AuthLayout = () => {

  const { isLoggedIn } = useSelector(state => state.states);
  const disp = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
        isLoggedIn? nav('/'):fetchData(disp,nav);
  }, [])


  return (
    <div className="w-full h-screen flex justify-between">
      <Outlet />
      <div className="hidden lg:block w-[100rem] 2xl:w-[90rem] h-full">
        <img className="h-full object-cover" src="/assets/images/side-img.svg" alt="Side Hero Image" />
      </div>

    </div>
  )
}
export default AuthLayout