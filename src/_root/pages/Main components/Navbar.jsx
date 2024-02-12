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
import { setCreatePost, setIsNavbarMinimized, setIsNotificationOpen, setIsSearchOpen, setIsSettingMenuOpen } from '../../../features/StateSlice';
import { FaReact } from "react-icons/fa6";
import { navAnim } from '../animation';
import { motion } from 'framer-motion';
import SettingsMenu from './SettingsMenu';


const Navbar = () => {

  const nav = useNavigate();

  const { isSearchOpen, isNotificationOpen, isNavbarMinimize, isSettingMenuOpen } = useSelector(state => state.states);
  const { profilePic , id} = useSelector(state => state.userData);

  const disp = useDispatch();

  const current = useLocation();

  const navig = (dest) => {
    if (isSearchOpen) disp(setIsSearchOpen(false))
    if (isNotificationOpen) disp(setIsNotificationOpen(false))
    if (isNavbarMinimize) disp(setIsNavbarMinimized(false))
    if (isSettingMenuOpen) disp(setIsSettingMenuOpen(false))
    if (dest === "/inbox") disp(setIsNavbarMinimized(true))
    nav(dest)
  }

  const stateChange = (search, notification, navbarMinimized) => {
    disp(setIsSearchOpen(search));
    disp(setIsNotificationOpen(notification));
    if (current.pathname !== "/inbox") { disp(setIsNavbarMinimized(navbarMinimized)) }
  }

  return (
    <motion.nav
      variants={navAnim}
      initial={"initial"}
      animate={isNavbarMinimize ? "close" : "open"}
      className={`border-r-[1px] h-[100vh] border-r-grey px-4 flex flex-col justify-between overflow-x-hidden box-border z-20 bg-black`}>
      <div className='w-full cursor-pointer'>
        {!isNavbarMinimize && <h1 onClick={() => navig("/")} className='font-pacifico text-3xl my-8 mx-2 cursor-pointer'>Reactgram</h1>}
        {isNavbarMinimize && <FaReact onClick={() => navig("/")} className='text-4xl -translate-x-1 stroke-[10] text-secondary my-8 mx-1' />}
        <div className={`flex items-center w-[300px] my-3 ${current.pathname === "/" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => navig('/')}>
          <GrHomeRounded className='text-[1.45rem]' />
          <span className='mx-[1.4rem]'>Home</span>
        </div>
        <div className={`flex items-center w-[300px] my-3 ${current.pathname === "/search" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => stateChange(!isSearchOpen, false, !isNavbarMinimize)}>
          <IoSearch className='text-3xl -translate-x-1' />
          <span className='mx-4'>Search</span>
        </div>
        <div className={`flex items-center w-[300px] my-3 ${current.pathname === "/explore" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => navig('/explore')}>
          <MdOutlineExplore className='text-3xl -translate-x-1' />
          <span className='mx-4'>Explore</span>
        </div>
        <div className={`flex items-center w-[300px] my-3 ${current.pathname === "/reels" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => navig('/watch')}>
          <MdOndemandVideo className='text-3xl -translate-x-1' />
          <span className='mx-4'>Reels</span>
        </div>
        <div className={`flex items-center w-[300px] my-3 ${current.pathname === "/messages" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => navig('/inbox')}>
          <TbMessageCircle2 className='text-3xl -translate-x-1' />
          <span className='mx-4'>Messages</span>
        </div>
        <div className={`flex items-center w-[300px] my-3 ${current.pathname === "/notifications" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => stateChange(false, !isNotificationOpen, !isNavbarMinimize)}>
          <CiHeart className='text-3xl -translate-x-1 text-red-500' />
          <span className='mx-4'>Notifications</span>
        </div>
        <div className={`flex items-center w-[300px] my-3 ${current.pathname === "/create" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => disp(setCreatePost(true))}>
          <MdOutlineAddBox className='text-3xl -translate-x-1 text-secondary' />
          <span className='mx-4'>Create</span>
        </div>
        <div className={`flex items-center w-[300px] my-3 ${current.pathname === "/profile" ? "font-extrabold" : ""} cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl`} onClick={() => navig('/profile/'+id)}>
          <img src={import.meta.env.VITE_API_URL + profilePic} className='w-7 h-7 rounded-full' alt="user" />
          <span className='mx-5'>Profile</span>
        </div>
      </div>
      <div>
        <div className='flex my-3 w-[300px] cursor-pointer items-center transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl group relative' onClick={() => navig('#')}>
          <BsThreads className='text-3xl mr-2' />
          <span className='mx-4 w-full'>Threads</span>
          <FiExternalLink className='text-2xl group-hover:block hidden text-white text-opacity-50' />
          <SettingsMenu />
        </div>
        <div onClick={() => disp(setIsSettingMenuOpen(!isSettingMenuOpen))} className='flex items-center w-[300px] my-3 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl'>
          <RxHamburgerMenu className='text-3xl' />
          <span className='mx-4'>Settings</span>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar