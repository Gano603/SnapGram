import React from 'react'
import { PiNotePencilDuotone } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { divAnim } from '../../animation';
import UserCard from './ChatCard';


const LeftPanel = ({ id }) => {

    const location = useLocation();

    const { isSearchOpen, isNotificationOpen } = useSelector(state => state.states);


    return (
        <AnimatePresence>
            {location.pathname === '/inbox' && !isSearchOpen && !isNotificationOpen &&
                <motion.div
                    variants={divAnim}
                    initial={"initial"}
                    animate={"animate"}
                    exit={"exit"}
                    className='w-[35rem] flex flex-col justify-between border-r-[1px] border-grey px-5 -z-10 h-screen'>
                    <div className='flex justify-between my-5 mt-10 items-center'>
                        <div className='flex items-center cursor-pointer active:text-gray-300'>
                            <span className='text-xl font-bold tracking-wide'>{"fliffy gut"}</span>
                            <IoIosArrowDown className='mx-2' />
                        </div>
                        <PiNotePencilDuotone className='text-[1.7rem] stroke-[1] cursor-pointer active:text-gray-300 mx-2' />
                    </div>
                    <div className='flex justify-between'>
                        <span className=' font-bold'>Messages</span>
                        <span className='text-sm text-gray-400'>Requests</span>
                    </div>
                    <div className={`h-full `}>
                        <div>
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />
                        </div>
                    </div>
                    
                </motion.div>}
        </AnimatePresence>
    )
}

export default LeftPanel