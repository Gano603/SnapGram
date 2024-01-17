import React from 'react'
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

  return (
    <div className='w-[26rem] border-r-[1px] h-full border-r-grey px-4 flex flex-col justify-between'>
      <div>
        <img src="/assets/images/title.svg" alt="SnapGram Icon" className='my-12 w-[70%]' />
        <div className='flex my-6 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <GrHomeRounded className='text-3xl' />
          <span className='text-lg mx-4'>Home</span>
        </div>
        <div className='flex my-6 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <IoSearch className='text-3xl' />
          <span className='text-lg mx-4'>Search</span>
        </div>
        <div className='flex my-6 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <MdOutlineExplore className='text-3xl' />
          <span className='text-lg mx-4'>Explore</span>
        </div>
        <div className='flex my-6 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <MdOndemandVideo className='text-3xl' />
          <span className='text-lg mx-4'>Reels</span>
        </div>
        <div className='flex my-6 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <TbMessageCircle2 className='text-3xl' />
          <span className='text-lg mx-4'>Messages</span>
        </div>
        <div className='flex my-6 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <CiHeart className='text-3xl' />
          <span className='text-lg mx-4'>Notifications</span>
        </div>
        <div className='flex my-6 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <MdOutlineAddBox className='text-3xl' />
          <span className='text-lg mx-4'>Create</span>
        </div>
        <div className='flex my-6 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <CgProfile className='text-3xl' />
          <span className='text-lg mx-4'>Profile</span>
        </div>

      </div>
      <div>
        <div className='flex my-6 cursor-pointer items-center transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl group' onClick={() => nav('#')}>
          <BsThreads className='text-3xl' />
          <span className='text-lg mx-4 w-full'>Threads</span>
          <FiExternalLink className='text-2xl group-hover:block hidden text-white text-opacity-50' />
        </div>
        <div className='flex my-6 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded-xl' onClick={() => nav('#')}>
          <RxHamburgerMenu className='text-3xl' />
          <span className='text-lg mx-4'>Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar