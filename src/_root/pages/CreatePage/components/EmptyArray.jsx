import React from 'react'
import { TbPhotoVideo } from "react-icons/tb";


const EmptyArray = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[94%] w-full'>
            <TbPhotoVideo className='text-8xl stroke-1 scale-x-110 ' />
            <h3 className='text-lg my-4'>Drag photos and videos here</h3>
            <button onClick={()=> document.getElementById('image').click()} className='text-sm bg-skyblue px-3 py-[0.3rem] rounded-md'>Select from Computer</button>
        </div>
    )
}

export default EmptyArray