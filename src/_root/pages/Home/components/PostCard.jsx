import React, { useEffect, useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
import axios from 'axios';
import toast from 'react-hot-toast';



const PostCard = ({ verified, userId, userImage, caption, img, likes, timePosted, postId, likedp, savedp }) => {

    const [time, setTime] = useState('');
    const [liked, setliked] = useState(likedp)
    const [postLikes, setpostLikes] = useState(likes);
    const [saved, setsaved] = useState(savedp);
    const [comment, setcomment] = useState("");
    const controller = new AbortController();

    useEffect(() => {
        const diff = Date.now() - timePosted;

        const timeInHours = Math.floor(diff / (1000 * 60 * 60));
        const timeInDays = Math.floor(timeInHours / 24);

        const displayTime = timeInDays > 0 ? `${timeInDays}d` : `${timeInHours} ${timeInHours > 24 ? '' : 'h'}`;

        setTime(displayTime)
    }, [timePosted])

    const likeUpdate = async (sup) => {
        setpostLikes(prev => prev + sup)
        sup == 1 ? setliked(true) : setliked(false);
        update(postLikes + sup, sup == 1 ? true : false);
    }

    const update = async (likes, likedSend) => {
        const data = await axios.get(import.meta.env.VITE_API_URL + `files/likeupdate/${postId}/${likes}/${likedSend}`, {
            withCredentials: true,
            signal: controller.signal
        })
        console.log(data)
    }

    const saveReq = async (state) => {
        const res = await axios.get(import.meta.env.VITE_API_URL + `files/saveupdate/${postId}/${state}`, {
            withCredentials: true,
        });
        console.log(res)
    }

    const saveHandler = (state) => {
        setsaved(state)
        saveReq(state)
    }

    const commentHandler = async () => {
        if (comment.length > 0) {
            await axios.post(import.meta.env.VITE_API_URL + `files/createcomment`, {
                _id: postId,
                comment
            }, {
                withCredentials: true,
            })
                .then((res) => {
                    if (res.status === 200) {
                        setcomment("");
                        toast.success("Comment Added successfully")
                    }
                })
        }
        else {
            toast.error("Comments Cannot be Empty",
                { duration: 1000 })
        }
    }

    return (
        <div className='w-[28rem] border-b-[1px] h-max pb-5 border-gray-800 my-12'>
            <div className='flex justify-between items-center'>
                <img className='w-9 h-9 rounded-full' src={import.meta.env.VITE_API_URL + userImage} alt={userId + ' profile-pic'} />
                <div className='w-full mx-2'>
                    <div className='flex items-center h-4'>
                        <h4 className='text-sm font-semibold'>{userId}</h4>
                        {verified && <img className='w-4 h-4 ml-1' src="/assets/images/verified.png" alt="verified" />}
                        <span className='text-gray-400 -translate-y-[0.25rem] text-lg mx-1'>.</span>
                        <span className='text-gray-400 text-sm'>{time}</span>
                    </div>
                    <span className='text-[0.8rem]'>Original Audio</span>
                </div>
                <BsThreeDots className='text-xl cursor-pointer' />
            </div>
            <div className='h-[35rem] border-[1px] border-gray-800 rounded-md my-2 flex justify-center items-center relative'>
                <IoCopyOutline className={`absolute top-4 right-4 text-xl rotate-90 ${img.length > 1 ? "" : "hidden"}`} />
                <img src={import.meta.env.VITE_API_URL + img[0].path} className='h-auto aspect-square' alt={img[0].originalname} />
            </div>
            <div>
                <div className='flex justify-between'>
                    <div className='flex my-1'>
                        {!liked && <CiHeart onClick={() => likeUpdate(1)} className='text-3xl -translate-y-[0.15rem] cursor-pointer' />}
                        {liked && <img onClick={() => likeUpdate(-1)} className='w-7 -translate-y-[0.15rem] cursor-pointer mx-[0.05rem] my-[0.05rem]' src={'/assets/icons/liked.svg'} />}
                        <IoChatbubbleOutline className='mx-3 text-2xl cursor-pointer' />
                        <FiSend className='text-2xl cursor-pointer' />
                    </div>
                    {!saved && <img onClick={() => saveHandler(true)} src="/assets/images/icons8-save.svg" className='cursor-pointer h-7' alt="save icon" />}
                    {saved && <img onClick={() => saveHandler(false)} src="/assets/images/save-on.svg" className='cursor-pointer h-7' alt="saved icon" />}
                </div>
                <span className='text-sm font-semibold'>{postLikes} {postLikes === 1 ? "like" : "likes"}</span>
                <p className='my-1 text-sm line-clamp-2'><span className='font-semibold mr-2'>{userId}</span>{caption}</p>
                <p className='text-gray-400 text-[0.84rem] my-1'>View All {"102"} comments</p>
                <div className='flex justify-between focus-within:border-b-[1px] border-b-gray-500'>
                    <input type="text" onChange={(e) => setcomment(e.target.value)} value={comment} placeholder='Add a comment...' className=' bg-transparent w-full outline-none text-[0.84rem]' />
                    <FiSend onClick={commentHandler} className={`text-xl rotate-45 text-gray-600 ${comment ? "block" : "hidden"} cursor-pointer mx-2 my-1`} />
                </div>
            </div>
        </div>
    )
}

export default PostCard