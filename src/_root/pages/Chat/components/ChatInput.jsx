import React from 'react'
import { FiSend } from "react-icons/fi";


const ChatInput = () => {
  return (
    <div className='flex justify-between items-center border-[1px] border-gray-600 mx-2 rounded-full'>
        <input className='h-12 bg-transparent outline-none w-full px-4' placeholder='Message' type="text" />
        <FiSend className='text-3xl cursor-pointer mx-4' />
    </div>
  )
}

export default ChatInput