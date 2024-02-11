import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';

const ChatCard = ({user,id1,search,imgUrl}) => {

  const {id,name,profilePic} = useSelector(state => state.userData);
  const [userImage, setuserImage] = useState("");

  useEffect(() =>{
      if(user) setuserImage(import.meta.env.VITE_API_URL+profilePic);
      else setuserImage(imgUrl)
  })

  return (
    <div className='flex items-center justify-between my-4'>
        <img src={'/assets/images/profile.png'} className='rounded-full w-[3rem]' alt="User Profile" />
        <div className='mx-3 w-full'>
            <h2 className='text-[0.9rem] font-semibold'>{"okok"}</h2>
            <h5 className='text-[0.9rem] font-semibold text-gray-400'>{"last message"}</h5>
        </div>
    </div>
  )
}

export default ChatCard