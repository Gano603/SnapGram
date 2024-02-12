import React from 'react'
import { BsGearWide } from "react-icons/bs";
import { useSelector } from 'react-redux';

const ProfileHeader = ({user}) => {

  const {id,name,profilePic,followers,following,posts} = useSelector(state => state.userData);

   return (
    <div className='my-5'>
      <div className='flex items-center'>
        <img src={import.meta.env.VITE_API_URL+profilePic} className='rounded-full w-40 h-40' alt="idname" />
        <div className='mx-20 my-5'>
          <div className='flex items-center mb-5'>
            <span className='mr-5 text-xl'>{id}</span>
            <button className='mx-1 bg-grey px-5 py-[0.3rem] rounded-md text-[0.85rem] font-semibold'>Edit Profile</button>
            <button className='mx-1 bg-grey px-5 py-[0.3rem] rounded-md text-[0.85rem] font-semibold'>View Archive</button>
            <BsGearWide className='mx-3 text-2xl' />
          </div>
          <div className='flex'>
            <div className='mr-5'>
              <span className='mr-[0.2rem] font-semibold'>{posts}</span>
              <span className='mx-[0.1rem] text-[0.95rem]'>{posts ===1? "post":"posts"}</span>
            </div>
            <div className='mx-5'>
              <span className='mr-[0.2rem] font-semibold'>{followers?.length || 0}</span>
              <span className='mx-[0.1rem] text-[0.95rem]'>{followers?.length ===1? "follower":"followers"}</span>
            </div>
            <div className='mx-5'>
              <span className='mr-[0.2rem] font-semibold'>{following?.length || 0}</span>
              <span className='mx-[0.1rem] text-[0.95rem]'>following</span>
            </div>
          </div>
          <div className='my-2'>
            <span className='text-[0.9rem] font-semibold'>{name}</span>
          </div>
          <div>
            <span className='text-[0.9rem]'>{"punchline"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader