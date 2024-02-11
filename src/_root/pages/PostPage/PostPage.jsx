import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsViewPost } from '../../../features/StateSlice';
import { IoIosArrowForward } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import axios from 'axios';
import CommentBox from './components/CommentBox';



const PostPage = ({ verified }) => {

    const { isViewPost } = useSelector(state => state.states);
    const { } = useSelector(state => state.userData);
    const { imgPath, likes, caption, timePosted, comments, userId } = useSelector(state => state.displayPost)
    const disp = useDispatch();

    const [liked, setliked] = useState(false)
    const [saved, setsaved] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [time, setTime] = useState('');
    const [user, setuser] = useState();
    const [activeImage, setactiveImage] = useState(0);
    const [postLikes, setpostLikes] = useState(likes);
    const controller = new AbortController();


    const fetchUser = async () => {
        setisLoading(true)
        const userData = await axios.get(import.meta.env.VITE_API_URL + `user/getuserbyid/${userId}`);
        setuser(userData.data.details);
        setisLoading(false);
    }

    useEffect(() => {
        const diff = Date.now() - timePosted;

        const timeInHours = Math.floor(diff / (1000 * 60 * 60));
        const timeInDays = Math.floor(timeInHours / 24);

        const displayTime = timeInDays > 0 ? `${timeInDays} ${timeInDays > 2 ? 'days' : 'day'}` : `${timeInHours} ${timeInHours > 24 ? '' : 'h'}`;

        console.log(displayTime);
        setTime(displayTime)

        fetchUser();
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

    return (
        <>
            {isViewPost && !isLoading &&
                <div onClick={() => disp(setIsViewPost(false))} className='w-full h-screen absolute top-0 left-0 bg-black z-30 bg-opacity-30 flex items-center justify-center'>
                    <div onClick={(e) => e.stopPropagation()} className='bg-black transition-all duration-300 w-[65%] h-[90%] rounded-xl overflow-hidden flex'>
                        <div className='w-3/5 flex items-center h-full relative'>
                            <img className='aspect-square' src={import.meta.env.VITE_API_URL + imgPath[activeImage].path} alt="" />
                            <div onClick={() => setactiveImage(activeImage - 1)} className={`absolute z-20 top-1/2 left-3 bg-opacity-80 ${activeImage === 0 ? "hidden" : ""} bg-grey rounded-full cursor-pointer`}>
                                <IoIosArrowForward className='m-[0.35rem] rotate-180 text-xl' />
                            </div>
                            <div onClick={() => setactiveImage(activeImage + 1)} className={`absolute z-20 top-1/2 right-3 bg-opacity-80 ${activeImage === imgPath.length - 1 ? "hidden" : ""} bg-grey rounded-full cursor-pointer`}>
                                <IoIosArrowForward className='m-[0.35rem] text-xl' />
                            </div>
                        </div>
                        <div className='w-2/5'>
                            <div className='flex justify-between items-center border-b-[1px] border-light-grey px-3 py-3 h-[3.5rem]'>
                                <img className='w-9 h-9 rounded-full' src={import.meta.env.VITE_API_URL + user.profilePic} alt="user-profile" />
                                <div className='w-full mx-2'>
                                    <div className='flex items-center h-4'>
                                        <h4 className='text-sm font-bold'>{user.id}</h4>
                                        {verified && <img className='w-4 h-4 ml-1' src="/assets/images/verified.png" alt="verified" />}
                                        <span className='-translate-y-[0.3rem] text-2xl mx-1'>.</span>
                                        <button className='text-[0.9rem] text-blue-500'>Follow</button>
                                    </div>
                                </div>
                                <BsThreeDots className='text-xl cursor-pointer' />
                            </div>
                            <div className='h-[69%] border-b-[1px] border-light-grey'>
                                <div className='flex items-center my-3 px-3'>
                                    <img className='w-9 h-9 rounded-full' src={import.meta.env.VITE_API_URL + user.profilePic} alt="user-profile" />
                                    <div className='w-full mx-2'>
                                        <div className='flex items-center h-4'>
                                            <h4 className='text-sm font-bold'>{user.id}</h4>
                                            {verified && <img className='w-4 h-4 ml-1' src="/assets/images/verified.png" alt="verified" />}
                                            <p className='mx-3'>{caption}</p>
                                        </div>
                                    </div>
                                </div>
                                {comments.map((index, iter) => {
                                    return (
                                        <CommentBox key={iter} index={index} />
                                    )
                                })}
                            </div>
                            <div className='flex justify-between h-[2rem] mx-2 my-3'>
                                <div className='flex my-1'>
                                    {!liked && <CiHeart onClick={() => likeUpdate(1)} className='text-3xl -translate-y-[0.15rem] cursor-pointer' />}
                                    {liked && <img onClick={() => likeUpdate(-1)} className='w-7 -translate-y-[0.15rem] cursor-pointer mx-[0.05rem] my-[0.05rem]' src={'/assets/icons/liked.svg'} />}
                                    <IoChatbubbleOutline className='mx-3 text-2xl cursor-pointer' />
                                    <FiSend className='text-2xl cursor-pointer' />
                                </div>
                                {!saved && <img onClick={() => saveHandler(true)} src="/assets/images/icons8-save.svg" className='cursor-pointer h-7' alt="save icon" />}
                                {saved && <img onClick={() => saveHandler(false)} src="/assets/images/save-on.svg" className='cursor-pointer h-7' alt="saved icon" />}
                            </div>
                            <span className='text-sm font-semibold mx-3 mt-2 mb-1'>{likes} {postLikes === 1 ? "like" : "likes"}</span>
                            <p className='text-gray-400 text-sm mx-3 mb-2 mt-1'>{time}</p>
                            <div className='h-[3rem] flex items-center'>
                                <MdEmojiEmotions className='text-2xl m-2' />
                                <input className='w-full outline-none h-full bg-transparent mx-2 text-sm' placeholder='Add comment...' type="text" />
                                <button className='text-[0.95rem] text-gray-400'>Post</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default PostPage