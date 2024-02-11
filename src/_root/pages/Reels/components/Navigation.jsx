import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";


const Navigation = () => {
  return (
    <div className='w-28 flex items-center flex-col-reverse'>
        <div className='mb-5'>
            <div className='bg-light-grey p-5 rounded-full my-3'>
                <FaArrowUp />
            </div>
            <div className='bg-light-grey p-5 rounded-full my-3'>
                <FaArrowDown/>
            </div>
        </div>
    </div>
  )
}

export default Navigation