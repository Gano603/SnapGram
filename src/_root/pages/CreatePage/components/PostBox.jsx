import React, { useState } from 'react'
import { GrEmoji } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { setCaption } from '../../../../features/StateSlice';


const PostBox = () => {
    const disp = useDispatch();
    const {caption} = useSelector(state => state.states)
    return (
        <div className='w-[33%] overflow-y-auto'>
            <div className='flex items-center justify-between m-4'>
                <img src={"/assets/images/profile.png"} className='rounded-full w-8' alt="User Profile" />
                <div className='mx-3 w-full'>
                    <h2 className="text-[0.9rem] font-semibold">{"Hello Worlds"}</h2>
                </div>
            </div>
            <div>
                <textarea onChange={(e)=> disp(setCaption(e.target.value))} className='h-48 w-full bg-transparent px-3 text-[1.05rem] py-1 outline-none placeholder:text-gray-500' placeholder='Write a caption...'></textarea>
                <div className='flex justify-between px-3'>
                    <GrEmoji className='text-xl' />
                    <p className='text-xs text-gray-300'>{caption.length}/2,200</p>
                </div>
            </div>
        </div>
    )
}

export default PostBox