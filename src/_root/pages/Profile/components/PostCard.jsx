import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";


const PostCard = ({imgSrc}) => {
  return (
    <div className='relative col-span-4'>
        <img className='w-80 h-80' src={imgSrc} />
        <div className='hover:bg-gray-400 hover:flex inset-0 absolute left-0 top-0 opacity-0 hover:opacity-100 hover:bg-opacity-30 justify-center items-center'>
            <div className='flex'>
                <span className='flex items-center mx-2 text-lg'>{"22"} <CiHeart className='mx-1 text-xl'/></span>
                <span className='flex items-center mx-2 text-lg'>{"7"} <IoChatbubbleOutline className='mx-1 text-xl'/></span>
            </div>
        </div>
    </div>
  )
}

export default PostCard