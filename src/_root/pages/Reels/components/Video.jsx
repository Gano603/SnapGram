import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const Video = () => {

    const [saved, setsaved] = useState(false)
    const [liked, setliked] = useState(false)

    return (
        <div className='flex'>
            <div className='h-[48rem] bg-light-grey w-[28rem] rounded-xl'>
                
            </div>
            <div className='flex flex-col-reverse items-center'>
                {/* onClick={() => saveHandler(true)} */}
                <BsThreeDots className='text-xl cursor-pointer my-1' />
                {!saved && <img src="/assets/images/icons8-save.svg" className='cursor-pointer h-8 my-3' alt="save icon" />}
                {saved && <img src="/assets/images/save-on.svg" className='cursor-pointer h-8 my-3' alt="saved icon" />}
                <FiSend className='text-3xl cursor-pointer mt-3 mb-1' />
                <span className='text-sm mb-3'>{"29k"}</span>
                <IoChatbubbleOutline className='mx-3 text-3xl cursor-pointer my-1' />
                <span className='text-sm mb-3'>{"29k"}</span>
                {!liked && <CiHeart onClick={() => likeUpdate(1)} className='text-4xl cursor-pointer my-1' />}
                {liked && <img onClick={() => likeUpdate(-1)} className='w-7 cursor-pointer my-1' src={'/assets/icons/liked.svg'} />}
            </div>
        </div>
    )
}

export default Video