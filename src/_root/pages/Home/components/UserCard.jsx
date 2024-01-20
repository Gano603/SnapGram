import React from 'react'
import { RxCross2 } from "react-icons/rx";

const UserCard = ({id,name,imgUrl,user,search}) => {
  return (
    <div className='flex items-center justify-between my-4'>
        <img src={imgUrl} className='rounded-full w-12' alt="User Profile" />
        <div className='mx-3 w-full'>
            <h2 className={`${user? "text-[0.9rem]":"text-[0.86rem]"} font-semibold`}>{id}</h2>
            <h5 className={`${user? "text-[0.84rem]":"text-[0.8rem]"} text-gray-400`}>{user? name:"Suggested for you"}</h5>
        </div>
        {!search && <button className='text-[0.8rem] text-blue-500'>{user? "Switch":"Follow"}</button>}
        {search && <RxCross2 className='text-2xl cursor-pointer' />}
    </div>
  )
}

export default UserCard