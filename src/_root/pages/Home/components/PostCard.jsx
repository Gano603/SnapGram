import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";



const PostCard = ({ verified }) => {
    return (
        <div className='w-[28rem] border-b-[1px] h-max pb-5 border-gray-800 my-12'>
            <div className='flex justify-between items-center'>
                <img className='w-9 h-9 rounded-full' src="/assets/images/profile.png" alt="user-profile" />
                <div className='w-full mx-2'>
                    <div className='flex items-center h-4'>
                        <h4 className='text-sm font-semibold'>fluffyguy</h4>
                        {verified && <img className='w-4 h-4 ml-1' src="/assets/images/verified.png" alt="verified" />}
                        <span className='text-gray-400 -translate-y-[0.25rem] text-lg mx-1'>.</span>
                        <span className='text-gray-400 text-sm'>1d</span>
                    </div>
                    <span className='text-[0.8rem]'>Original Audio</span>
                </div>
                <BsThreeDots className='text-xl cursor-pointer' />
            </div>
            <div className='h-[35rem] border-[1px] border-gray-800 rounded-md my-2 flex justify-center items-center'>
                <img src="/assets/images/verified.png" className='h-auto aspect-square' alt="something" />
            </div>
            <div>
                <div className='flex justify-between'>
                    <div className='flex my-1'>
                    <CiHeart className='text-2xl cursor-pointer'/>
                    <IoChatbubbleOutline className='mx-3 text-2xl cursor-pointer' />
                    <FiSend className='text-2xl cursor-pointer'/>
                    </div>
                    <img src="/assets/images/icons8-save.svg" className='text-2xl text-white cursor-pointer h-7' alt="" />
                </div>
                <span className='text-sm font-semibold'>9999 likes</span>
                <p className='my-1 text-sm line-clamp-2'><span className='font-semibold mr-2'>{"fluffyguy"}</span>Much love to all my Filipino brothers and sisters out there. Shout out to PAC-MAN @MannyPacquiao for being a fan and killing that song 👏🏼👏🏼👏🏼😁</p>
                <p className='text-gray-400 text-[0.84rem] my-1'>View All {"102"} comments</p>
                <input type="text" placeholder='Add a comment...' className=' bg-transparent w-full outline-none text-[0.84rem]' />
            </div>
        </div>
    )
}

export default PostCard