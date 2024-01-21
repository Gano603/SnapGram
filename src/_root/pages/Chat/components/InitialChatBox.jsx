import React from 'react'
import { TbMessageCircle2 } from "react-icons/tb";
import { useSelector } from 'react-redux';


const InitialChatBox = () => {

    const {isInitialChatbox} = useSelector(state => state.states);

  return (
    <>
    {isInitialChatbox && <div className='h-screen flex justify-center items-center'>
        <div className='flex flex-col items-center'>
            <TbMessageCircle2 className='text-8xl my-2' />
            <h3 className='text-xl'>Your messages</h3>
            <h5 className='text-sm text-gray-400 mb-2'>Send private photos and messages to a friend or group</h5>
            <button className='px-4 bg-blue-500 py-[0.4rem] text-sm my-1 rounded-md'>Send message</button>
        </div>
    </div>}
    </>
  )
}

export default InitialChatBox