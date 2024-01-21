import React from 'react'

const NotificationSuggestion = ({ imgUrl, id1, id2 }) => {
    return (
        <div className='flex items-center justify-between my-3'>
            <img src={imgUrl} className='rounded-full w-[2.8rem]' alt="User Profile" />
            <div className='mx-3 w-full'>
                <h2 className='text-[0.9rem] leading-[1.2rem]'>Follow <span className='font-bold'>{id1}</span>, <span className='font-bold'>{id2}</span> and others you know to see their photos and videos. <span className='text-gray-400 text-[0.85rem mx-1]'>{"3d"}</span></h2>
            </div>
        </div>
    )
}

export default NotificationSuggestion