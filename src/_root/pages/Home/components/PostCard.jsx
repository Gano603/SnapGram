import React, { useEffect, useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import axios from 'axios';



const PostCard = ({ verified, userId, caption, img, likes, timePosted }) => {

    const [user, setuser] = useState({});
    const [time, setTime] = useState('');

    const fetchUser = async () => {
        const userData = await axios.get(import.meta.env.VITE_API_URL + `user/getuser/${userId}`);
        setuser(userData.data.details);
    }

    useEffect(() => {
        const diff = Date.now() - timePosted;

        const timeInHours = Math.floor(diff / (1000 * 60 * 60));
        const timeInDays = Math.floor(timeInHours / 24);

        const displayTime =timeInDays > 0? `${timeInDays} ${timeInDays > 2 ? '' : 'd'}`: `${timeInHours} ${timeInHours > 24 ? '' : 'h'}`;

        setTime(displayTime)


        fetchUser();
    },[timePosted])

    return (
        <div className='w-[28rem] border-b-[1px] h-max pb-5 border-gray-800 my-12'>
            <div className='flex justify-between items-center'>
                <img className='w-9 h-9 rounded-full' src="/assets/images/profile.png" alt="user-profile" />
                <div className='w-full mx-2'>
                    <div className='flex items-center h-4'>
                        <h4 className='text-sm font-semibold'>{user.id}</h4>
                        {verified && <img className='w-4 h-4 ml-1' src="/assets/images/verified.png" alt="verified" />}
                        <span className='text-gray-400 -translate-y-[0.25rem] text-lg mx-1'>.</span>
                        <span className='text-gray-400 text-sm'>{time}</span>
                    </div>
                    <span className='text-[0.8rem]'>Original Audio</span>
                </div>
                <BsThreeDots className='text-xl cursor-pointer' />
            </div>
            <div className='h-[35rem] border-[1px] border-gray-800 rounded-md my-2 flex justify-center items-center'>
                <img src={import.meta.env.VITE_API_URL + img[0].path} className='h-auto aspect-square' alt={img[0].originalname} />
            </div>
            <div>
                <div className='flex justify-between'>
                    <div className='flex my-1'>
                        <CiHeart className='text-3xl -translate-y-[0.15rem] cursor-pointer' />
                        <IoChatbubbleOutline className='mx-3 text-2xl cursor-pointer' />
                        <FiSend className='text-2xl cursor-pointer' />
                    </div>
                    <img src="/assets/images/icons8-save.svg" className='text-2xl text-white cursor-pointer h-7' alt="" />
                </div>
                <span className='text-sm font-semibold'>{likes} likes</span>
                <p className='my-1 text-sm line-clamp-2'><span className='font-semibold mr-2'>{user.id}</span>{caption}</p>
                <p className='text-gray-400 text-[0.84rem] my-1'>View All {"102"} comments</p>
                <input type="text" placeholder='Add a comment...' className=' bg-transparent w-full outline-none text-[0.84rem]' />
            </div>
        </div>
    )
}

export default PostCard