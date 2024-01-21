import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { MdOutlineAddBox } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import { BsThreads } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setIsNavbarMinimized, setIsNotificationOpen, setIsSearchOpen } from '../../../features/StateSlice';
import { FaReact } from "react-icons/fa6";




const Navbar = () => {

  const nav = useNavigate();

  const { isSearchOpen , isNotificationOpen , isNavbarMinimize} = useSelector(state => state.states);
  const disp = useDispatch();

  const current = useLocation();

  const navig = (dest) => {
  if (isSearchOpen) disp(setIsSearchOpen(false))
  if (isNotificationOpen) disp(setIsNotificationOpen(false))
  if (isNavbarMinimize) disp(setIsNavbarMinimized(false))
  if (dest==="/inbox") disp(setIsNavbarMinimized(true))
  nav(dest)
}

  const stateChange = (search,notification,navbarMinimized) =>{
    disp(setIsSearchOpen(search))
    disp(setIsNotificationOpen(notification))
    disp(setIsNavbarMinimized(navbarMinimized))
  }

return (
  <nav className={`border-r-[1px] h-[100vh] border-r-grey px-4 flex flex-col justify-between ${isNavbarMinimize ? "w-[5rem]" : "w-[50rem]"} z-20 bg-black`}>
    <div className='w-full cursor-pointer'>
      {!isNavbarMinimize && <h1 onClick={() => navig("/")} className='font-pacifico text-3xl my-8 mx-2'>Reactgram</h1>}
      {isNavbarMinimize && <FaReact onClick={() => navig("/")} className='text-4xl -translate-x-1 stroke-[10] text-secondary my-8 mx-1' />}
      <div className={`flex items-center my-4 ${current.pathname === "/" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => navig('/')}>
        <GrHomeRounded className='text-[1.45rem]' />
        {!isNavbarMinimize && <span className='mx-[1.4rem]'>Home</span>}
      </div>
      <div className={`flex items-center my-4 ${current.pathname === "/search" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => stateChange(!isSearchOpen,false,true)}>
        <IoSearch className='text-3xl -translate-x-1' />
        {!isNavbarMinimize && <span className='mx-4'>Search</span>}
      </div>
      <div className={`flex items-center my-4 ${current.pathname === "/explore" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => navig('/explore')}>
        <MdOutlineExplore className='text-3xl -translate-x-1' />
        {!isNavbarMinimize && <span className='mx-4'>Explore</span>}
      </div>
      <div className={`flex items-center my-4 ${current.pathname === "/reels" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => navig('#')}>
        <MdOndemandVideo className='text-3xl -translate-x-1' />
        {!isNavbarMinimize && <span className='mx-4'>Reels</span>}
      </div>
      <div className={`flex items-center my-4 ${current.pathname === "/messages" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => navig('/inbox')}>
        <TbMessageCircle2 className='text-3xl -translate-x-1' />
        {!isNavbarMinimize && <span className='mx-4'>Messages</span>}
      </div>
      <div className={`flex items-center my-4 ${current.pathname === "/notifications" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => stateChange(false,!isNotificationOpen,true)}>
        <CiHeart className='text-3xl -translate-x-1 text-red-500' />
        {!isNavbarMinimize && <span className='mx-4'>Notifications</span>}
      </div>
      <div className={`flex items-center my-4 ${current.pathname === "/create" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => navig('#')}>
        <MdOutlineAddBox className='text-3xl -translate-x-1 text-secondary' />
        {!isNavbarMinimize && <span className='mx-4'>Create</span>}
      </div>
      <div className={`flex items-center my-4 ${current.pathname === "/profile" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => navig('/profile')}>
        <img src="/assets/icons/profile-placeholder.svg" className='w-7 h-7 rounded-full' alt="user" />
        {!isNavbarMinimize && <span className='mx-5'>Profile</span>}
      </div>
    </div>
    <div>
      <div className='flex my-4 cursor-pointer items-center transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl group' onClick={() => navig('#')}>
        <BsThreads className='text-2xl' />
        {!isNavbarMinimize && <span className='mx-4 w-full'>Threads</span>}
        <FiExternalLink className='text-2xl group-hover:block hidden text-white text-opacity-50' />
      </div>
      <div className='flex items-center my-4 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => navig('#')}>
        <RxHamburgerMenu className='text-2xl' />
        {!isNavbarMinimize && <span className='mx-4'>Settings</span>}
      </div>
    </div>
  </nav>
)
}

export default Navbar