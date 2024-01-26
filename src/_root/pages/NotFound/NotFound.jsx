import React from 'react'
import { Link } from 'react-router-dom'
import { FcBrokenLink } from "react-icons/fc";


const NotFound = () => {
  return (
    <div className='flex flex-col h-[90%] w-full justify-center items-center'>
        <FcBrokenLink className='text-8xl rotate-45 my-5' />
        <p className='text-lg'>It looks like you have reached a broken link.</p>
        <Link to={'/'} className='hover:underline'>Click here to go back.</Link>
    </div>
  )
}

export default NotFound