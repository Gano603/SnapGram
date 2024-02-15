import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IoIosArrowForward } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import axios from 'axios';
import CommentBox from './components/CommentBox';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const PostPage = () => {
    const nav = useNavigate();
    try {

        const { profilePic, id, verified } = useSelector(state => state.displayUser);
        const { _id, imgPath, likes, caption, timePosted } = useSelector(state => state.displayPost)

        const [liked, setliked] = useState(false)
        const [saved, setsaved] = useState(false);
        const [time, setTime] = useState('');
        const [comments, setcomments] = useState([]);
        const [comment, setcomment] = useState('');
        const [activeImage, setactiveImage] = useState(0);
        const [postLikes, setpostLikes] = useState(likes);
        const controller = new AbortController();

        useEffect(() => {
            const diff = Date.now() - timePosted;

            const timeInHours = Math.floor(diff / (1000 * 60 * 60));
            const timeInDays = Math.floor(timeInHours / 24);

            const displayTime = timeInDays > 0 ? `${timeInDays} ${timeInDays > 2 ? 'days' : 'day'}` : `${timeInHours} ${timeInHours > 24 ? '' : 'h'}`;

            setTime(displayTime)
            getComments();
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
        }

        const getComments = async () => {
            await axios.get(import.meta.env.VITE_API_URL + 'files//getcomments/' + _id)
                .then(res => {
                    if (res.status === 200) {
                        setcomments(res.data.details)
                    }
                })
        }

        const commentHandler = async () => {
            if (comment.length > 0) {
                await axios.post(import.meta.env.VITE_API_URL + `files/createcomment`, {
                    _id,
                    comment
                }, {
                    withCredentials: true,
                })
                    .then((res) => {
                        if (res.status === 200) {
                            setcomment("");
                            toast.success("Comment Added successfully");
                            getComments();
                        }
                    })
            }
            else{
                toast.error("Comments Cannot be Empty",
                {duration:1000})
            }
        }

        return (
            <div onClick={() => window.history.back()} className='w-full h-screen absolute top-0 left-0 bg-black z-30 bg-opacity-30 flex items-center justify-center backdrop-blur-lg'>
                <RxCross2 className='absolute top-4 right-4 text-2xl text-white stroke-2 cursor-pointer' />
                <div onClick={(e) => e.stopPropagation()} className='bg-black transition-all duration-300 w-[65%] h-[90%] rounded-xl overflow-hidden flex'>
                    <div className='w-3/5 flex items-center h-full relative'>
                        <img className='aspect-square' src={import.meta.env.VITE_API_URL + imgPath[activeImage]?.path} alt={imgPath[activeImage]?.originalname} />
                        <div onClick={() => setactiveImage(activeImage - 1)} className={`absolute z-20 top-1/2 left-3 bg-opacity-80 ${activeImage === 0 ? "hidden" : ""} bg-grey rounded-full cursor-pointer`}>
                            <IoIosArrowForward className='m-[0.35rem] rotate-180 text-xl' />
                        </div>
                        <div onClick={() => setactiveImage(activeImage + 1)} className={`absolute z-20 top-1/2 right-3 bg-opacity-80 ${activeImage === imgPath.length - 1 ? "hidden" : ""} bg-grey rounded-full cursor-pointer`}>
                            <IoIosArrowForward className='m-[0.35rem] text-xl' />
                        </div>
                    </div>
                    <div className='w-2/5'>
                        <div className='flex justify-between items-center border-b-[1px] border-light-grey px-3 py-3 h-[3.5rem]'>
                            <img className='w-9 h-9 rounded-full' src={import.meta.env.VITE_API_URL + profilePic} alt="user-profile" />
                            <div className='w-full mx-2'>
                                <div className='flex items-center h-4'>
                                    <h4 className='text-sm font-bold'>{id}</h4>
                                    {verified && <img className='w-4 h-4 ml-1' src="/assets/images/verified.png" alt="verified" />}
                                    <span className='-translate-y-[0.3rem] text-2xl mx-1'>.</span>
                                    <button className='text-[0.9rem] text-blue-500'>Follow</button>
                                </div>
                            </div>
                            <BsThreeDots className='text-xl cursor-pointer' />
                        </div>
                        <div className='h-[69%] border-b-[1px] border-light-grey'>
                            <div className='flex items-center my-3 px-3'>
                                <img className='w-9 h-9 rounded-full' src={import.meta.env.VITE_API_URL + profilePic} alt="user-profile" />
                                <div className='w-full mx-2'>
                                    <div className='flex items-center h-4'>
                                        <h4 className='text-sm font-bold'>{id}</h4>
                                        {verified && <img className='w-4 h-4 ml-1' src="/assets/images/verified.png" alt="verified" />}
                                        <p className='mx-3 text-sm'>{caption}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='my-8'>
                                {comments.map((index, iter) => {
                                    return (
                                        <CommentBox key={iter} index={index} />
                                    )
                                })}
                            </div>
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
                            <input onChange={(e) => setcomment(e.target.value)} value={comment} className='w-full outline-none h-full bg-transparent mx-2 text-sm' placeholder='Add comment...' type="text" />
                            <button onClick={commentHandler} className={`text-[0.95rem] cursor-pointer ${comment.length === 0 ? "text-gray-400" : "text-blue-600"}`}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        useEffect(() => {
            nav('/')
        }, [])

    }
}

export default PostPage