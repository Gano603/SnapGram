import React, { useState } from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { BsThreads } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {

  const nav = useNavigate();

  const [selected, setselected] = useState();

  return (
    <nav className='w-[24rem] border-r-[1px] h-[100vh] border-r-grey px-4 flex flex-col justify-between'>
      <div className='w-full'>
        <h1 className='font-pacifico text-3xl my-8 mx-2'>Reactgram</h1>
        <div className='flex my-4 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('/')}>
          <GrHomeRounded className='text-2xl' />
          <span className='mx-4'>Home</span>
        </div>
        <div className='flex my-4 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <IoSearch className='text-2xl' />
          <span className='mx-4'>Search</span>
        </div>
        <div className='flex my-4 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <MdOutlineExplore className='text-2xl' />
          <span className='mx-4'>Explore</span>
        </div>
        <div className='flex my-4 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <MdOndemandVideo className='text-2xl' />
          <span className='mx-4'>Reels</span>
        </div>
        <div className='flex my-4 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <TbMessageCircle2 className='text-2xl' />
          <span className='mx-4'>Messages</span>
        </div>
        <div className='flex my-4 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <CiHeart className='text-2xl text-red-500' />
          <span className='mx-4'>Notifications</span>
        </div>
        <div className='flex my-4 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <MdOutlineAddBox className='text-2xl text-secondary' />
          <span className='mx-4'>Create</span>
        </div>
        <div className='flex items-center my-4 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('/profile')}>
          <img src="/assets/icons/profile-placeholder.svg" className='w-7 h-7 rounded-full' alt="user" />
          <span className='mx-3'>Profile</span>
        </div>

      </div>
      <div>
        <div className='flex my-4 cursor-pointer items-center transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl group' onClick={() => nav('#')}>
          <BsThreads className='text-2xl' />
          <span className='mx-4 w-full'>Threads</span>
          <FiExternalLink className='text-2xl group-hover:block hidden text-white text-opacity-50' />
        </div>
        <div className='flex my-4 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <RxHamburgerMenu className='text-2xl' />
          <span className='mx-4'>Settings</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar