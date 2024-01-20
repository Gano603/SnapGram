import React from 'react'

const UserCard = ({id,name,imgUrl,user}) => {
  return (
    <div className='flex items-center justify-between my-4'>
        <img src={imgUrl} className='rounded-full w-12' alt="User Profile" />
        <div className='mx-3 w-full'>
            <h2 className={`${user? "text-[0.9rem]":"text-[0.86rem]"} font-semibold`}>{id}</h2>
            <h5 className={`${user? "text-[0.84rem]":"text-[0.8rem]"} text-gray-400`}>{user? name:"Suggested for you"}</h5>
        </div>
        <button className='text-[0.8rem] text-blue-500'>{user? "Switch":"Follow"}</button>
    </div>
  )
}

export default UserCard