import React from 'react'

const CommentBox = ({index}) => {
    return (
        <div className='flex items-center my-3 px-3'>
            <img className='w-9 h-9 rounded-full' src={import.meta.env.VITE_API_URL + user.profilePic} alt="user-profile" />
            <div className='w-full mx-2'>
                <div className='flex items-center h-4'>
                    <h4 className='text-sm font-bold'>{user.id}</h4>
                    {verified && <img className='w-4 h-4 ml-1' src="/assets/images/verified.png" alt="verified" />}
                    <p className='mx-3'>{index.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentBox