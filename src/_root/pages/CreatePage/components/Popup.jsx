import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { multiplePagePopupAnim } from '../../animation';
import { setActiveImage } from '../../../../features/StateSlice';

const Popup = ({ picture }) => {
    const disp = useDispatch();
    const {activeImage} = useSelector(state => state.states);
    // console.log(picture)
    return (
        <AnimatePresence>
                <motion.div
                    variants={multiplePagePopupAnim}
                    initial={"initial"}
                    animate={"animate"}
                    exit={"exit"}
                    className='absolute right-3 bottom-10 w-max h-max bg-grey p-2 rounded-md flex items-center'>
                    {picture.map((index, iter) => {
                        return (
                            <div key={iter} onClick={() => disp(setActiveImage(iter))} className={`w-20 h-20 mx-2 p-1 cursor-pointer ${activeImage === iter ? "" : "bg-darkest-grey bg-opacity-40"}`}>
                                <img className='w-full h-full active:scale-125 transition-all duration-300' src={index} />
                            </div>
                        )
                    })}
                    <CiCirclePlus onClick={() => document.getElementById('image').click()} className='text-5xl cursor-pointer' />
                </motion.div>
        </AnimatePresence>
    )
}

export default Popup