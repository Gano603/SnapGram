import React from 'react'

const ChatHeader = () => {
    return (
        <div className='flex items-center justify-between p-4 border-b-[1px] border-b-gray-600'>
            <img src={'/assets/images/profile.png'} className='rounded-full w-[3rem]' alt="User Profile" />
            <div className='mx-3 w-full'>
                <h2 className='text-[0.9rem] font-semibold'>{"okok"}</h2>
                <h5 className='text-[0.9rem] font-semibold text-gray-400'>Active {"3h"} ago</h5>
            </div>
        </div>
    )
}

export default ChatHeader