import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCreatePost, setCreatePostExtend, setMultiplePagePopup } from '../../../features/StateSlice';
import { FaArrowLeft } from "react-icons/fa6";
import EmptyArray from './components/EmptyArray';
import ImageDisplay from './components/ImageDisplay';
import PostBox from './components/PostBox';
import axios from 'axios';
import toast from 'react-hot-toast';



const CreateComponent = () => {

    const { isCreatePost, createPostExtend, caption } = useSelector(state => state.states);
    const [pictures, setpictures] = useState([]);
    const [result, setresult] = useState([]);
    const disp = useDispatch();
    const [state, setstate] = useState(0);
    const inputRef = useRef(null)

    const headings = [
        { heading: "Create New Post", next: "", back: false },
        { heading: "Crop", next: "Next", back: true },
        { heading: "Create New Post", next: "Share", back: true },
        { heading: "Sharing", next: "", back: false },
        { heading: "Share Successful", next: "", back: false },
    ]

    useEffect(() => {
        const loadPictures = async () => {
            let promises = [];

            if (pictures.length > 0) {
                for (const file of pictures) {
                    const promise = new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result);
                        reader.readAsDataURL(file);
                    });

                    promises.push(promise);
                }

                try {

                    if (result.length === 0) {
                        const resultsArray = await Promise.all(promises);
                        setresult(resultsArray);
                        setstate((prev) => prev + 1);
                    }
                } catch (error) {
                    console.error('Error reading files:', error);
                }
            }
        };

        loadPictures();
    }, [pictures]);

    const upload = async () => {
        const dataTransfer = new DataTransfer();
        pictures.forEach((file) => {
            dataTransfer.items.add(file)
        })

        try {
            const res = await axios.postForm(import.meta.env.VITE_API_URL + `files/upload/${caption}`, {
                'files[]': dataTransfer.files
            }, { withCredentials: true });
            if (res.status === 200) {
                toast.success('Post Shared Successfully',{
                    position:'top-right',
                    duration: 3000
                })
                setstate((prev) => prev + 1);
                setTimeout(1000);
                setstate(0);
                disp(setCreatePost(false));
                disp(setCreatePostExtend(false))
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handler = (value) => {
        setstate((prev) => prev + value);
        if (state + value === 3) upload();
        if (state + value === 2) {
            disp(setCreatePostExtend(true));
            disp(setMultiplePagePopup(false))
        }
        else disp(setCreatePostExtend(false));
        if (state + value === 0) {
            setresult([]);
            setpictures([])
        }
    }

    const resetPage = () => {
        setresult([]);
        setpictures([]);
        disp(setCreatePost(false))
    }

    return (
        <>
            {isCreatePost &&
                <div onClick={resetPage} className='w-full h-screen absolute top-0 left-0 bg-black z-30 bg-opacity-30 flex items-center justify-center'>
                    <div onClick={(e) => e.stopPropagation()} className={`bg-dark-grey transition-all duration-300 ${createPostExtend ? "w-[53%]" : "w-[36%]"} h-[80%] rounded-xl overflow-hidden`}>
                        <div className='flex justify-between items-center px-4 border-b-[1px] border-white border-opacity-15 h-[6%]'>
                            {headings[state].back && <FaArrowLeft onClick={() => handler(-1)} className='text-2xl cursor-pointer' />}
                            <h1 className='my-2 font-semibold'>{headings[state].heading}</h1>
                            <p onClick={() => handler(1)} className='text-[0.9rem] text-blue-400 font-semibold cursor-pointer'>{headings[state].next}</p>
                        </div>
                        <form encType='multipart/form-data'>
                            <input ref={inputRef} id='image' name='images' onChange={(e) => setpictures([...pictures, ...e.target.files])} className='hidden' type="file" accept='image/*' multiple />
                        </form>

                        {pictures.length === 0 && <EmptyArray />}
                        <div className='flex h-[94%]'>
                            {result && <ImageDisplay pictures={result} />}
                            {createPostExtend && <PostBox />}
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default CreateComponent