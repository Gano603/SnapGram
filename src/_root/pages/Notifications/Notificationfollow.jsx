import React from 'react'

const Notificationfollow = ({imgUrl,id}) => {
    return (
        <div className='flex items-center justify-between my-3'>
            <img src={imgUrl} className='rounded-full w-[2.8rem]' alt="User Profile" />
            <div className='mx-3 w-full'>
                <h2 className='text-[0.9rem]'><span className='font-bold'>{id}</span> started following you. <span className='text-gray-400 text-[0.85rem mx-1]'>{"3d"}</span></h2>
            </div>
            <button className='px-6 rounded-md text-sm py-[0.45rem] font-semibold bg-blue-500'>Follow</button>
        </div>
    )
}

export default Notificationfollow