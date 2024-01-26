import React, { useState } from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import Popup from './Popup';
import { setActiveImage, setMultiplePagePopup } from '../../../../features/StateSlice';
import { IoIosArrowForward } from "react-icons/io";



const ImageDisplay = ({ pictures }) => {

    const disp = useDispatch();
    const {multiplePagePopup , createPostExtend , activeImage} = useSelector(state => state.states);
    // console.log(pictures)
    return (
        <div className={`h-full ${createPostExtend? "w-[67%]":"w-full"} bg-darkest-grey relative`}>
            <img className='w-full h-full' src={pictures[activeImage]} />
            <div onClick={()=>disp(setActiveImage(activeImage-1))} className={`absolute top-1/2 left-3 bg-opacity-80 ${activeImage === 0 ? "hidden" : ""} bg-grey rounded-full cursor-pointer`}>
                <IoIosArrowForward className='m-[0.35rem] rotate-180 text-xl' />
            </div>
            <div onClick={()=>disp(setActiveImage(activeImage+1))} className={`absolute top-1/2 right-3 bg-opacity-80 ${activeImage === pictures.length-1 ? "hidden" : ""} bg-grey rounded-full cursor-pointer`}>
                <IoIosArrowForward className='m-[0.35rem] text-xl' />
            </div>
            <div className='absolute bottom-5 right-5 bg-grey rounded-full p-[0.40rem]'>
                <IoCopyOutline onClick={() => disp(setMultiplePagePopup(!multiplePagePopup))} className='text-[1.1rem] rotate-180 cursor-pointer' />
                {multiplePagePopup && <Popup picture={pictures} />}
            </div>
        </div>
    )
}

export default ImageDisplay