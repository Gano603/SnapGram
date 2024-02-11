import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';

const UserCard = ({user,id1,search,imgUrl}) => {

  const {id,name,profilePic} = useSelector(state => state.userData);
  const [userImage, setuserImage] = useState("");

  useEffect(() =>{
      if(user) setuserImage(import.meta.env.VITE_API_URL+profilePic);
      else setuserImage(imgUrl)
  })

  return (
    <div className='flex items-center justify-between my-4'>
        <img src={userImage} className='rounded-full w-[2.6rem]' alt="User Profile" />
        <div className='mx-3 w-full'>
            <h2 className={`${user? "text-[0.9rem]":"text-[0.86rem]"} font-semibold`}>{user? id:id1}</h2>
            <h5 className={`${user? "text-[0.84rem]":"text-[0.8rem]"} text-gray-400`}>{user? name:"Suggested for you"}</h5>
        </div>
        {!search && <button className='text-[0.8rem] text-blue-500'>{user? "Switch":"Follow"}</button>}
        {search && <RxCross2 className='text-2xl cursor-pointer' />}
    </div>
  )
}

export default UserCard