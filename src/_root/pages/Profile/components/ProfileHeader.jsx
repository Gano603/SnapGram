import React from 'react'
import { BsGearWide } from "react-icons/bs";

const ProfileHeader = () => {
  return (
    <div className='my-5'>
      <div className='flex items-center'>
        <img src="/assets/images/profile.png" className='rounded-full w-40 h-40' alt="idname" />
        <div className='mx-20 my-5'>
          <div className='flex items-center mb-5'>
            <span className='mr-5 text-xl'>{"fluffyguy"}</span>
            <button className='mx-1 bg-grey px-5 py-[0.3rem] rounded-md text-[0.85rem] font-semibold'>Edit Profile</button>
            <button className='mx-1 bg-grey px-5 py-[0.3rem] rounded-md text-[0.85rem] font-semibold'>View Archive</button>
            <BsGearWide className='mx-3 text-2xl' />
          </div>
          <div className='flex'>
            <div className='mr-5'>
              <span className='mr-[0.2rem] font-semibold'>{"20"}</span>
              <span className='mx-[0.1rem] text-[0.95rem]'>posts</span>
            </div>
            <div className='mx-5'>
              <span className='mr-[0.2rem] font-semibold'>{"20"}</span>
              <span className='mx-[0.1rem] text-[0.95rem]'>followers</span>
            </div>
            <div className='mx-5'>
              <span className='mr-[0.2rem] font-semibold'>{"20"}</span>
              <span className='mx-[0.1rem] text-[0.95rem]'>following</span>
            </div>
          </div>
          <div className='my-2'>
            <span className='text-[0.9rem] font-semibold'>{"fluff"}</span>
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