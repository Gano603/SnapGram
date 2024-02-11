import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setIsViewPost } from '../../../../features/StateSlice';
import { setData } from '../../../../features/displayPost';



const PostCard = ({ index }) => {

  const disp = useDispatch();

  function postHandler() {
    disp(setData(index));
    disp(setIsViewPost(true))
  }


  return (
    <div onClick={postHandler} className='relative col-span-4 cursor-pointer'>
      <img className='w-80 h-80' src={import.meta.env.VITE_API_URL + index.imgPath[0].path} alt={index.imgPath[0].originalname} />
      <IoCopyOutline className={`absolute top-4 right-4 text-xl rotate-90 ${index.imgPath.length > 1 ? "" : "hidden"}`} />
      <div className='hover:bg-gray-400 hover:flex inset-0 absolute left-0 top-0 opacity-0 hover:opacity-100 hover:bg-opacity-30 justify-center items-center'>
        <div className='flex'>
          <span className='flex items-center mx-2 text-lg'>{index.likes || 0} <CiHeart className='mx-1 text-xl' /></span>
          <span className='flex items-center mx-2 text-lg'>{index.comments.length || 0} <IoChatbubbleOutline className='mx-1 text-xl' /></span>
        </div>
      </div>
    </div>
  )
}

export default PostCard