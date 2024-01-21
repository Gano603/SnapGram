import React from 'react'
import { PiNotePencilDuotone } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from 'react-router-dom';


const LeftPanel = ({ id }) => {

    const location = useLocation();

    return (
        <>
            {location.pathname === '/inbox' &&
                <div className='w-[24rem] flex flex-col justify-between absolute left-0 top-0 border-r-[1px] border-grey px-5 -z-10 h-screen'>
                    <div className='flex justify-between my-5 mt-10 items-center'>
                        <div className='flex items-center cursor-pointer active:text-gray-300'>
                            <span className='text-xl font-bold tracking-wide'>{id}</span>
                            <IoIosArrowDown className='mx-2' />
                        </div>
                        <PiNotePencilDuotone className='text-[1.7rem] stroke-[1] cursor-pointer active:text-gray-300 mx-2' />
                    </div>
                    <div className='flex justify-between'>
                        <span className=' font-bold'>Messages</span>
                        <span className='text-sm text-gray-400'>Requests</span>
                    </div>
                    <div className='flex justify-center items-center h-full'>
                        <span>No messages found</span>
                    </div>
                </div>}
        </>
    )
}

export default LeftPanel