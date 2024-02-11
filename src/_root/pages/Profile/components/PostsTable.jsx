import React, { useState } from 'react'
import { IoMdGrid } from "react-icons/io";
import { FaUserTag } from "react-icons/fa";
import PostCard from './PostCard';



const PostsTable = ({posts}) => {

    const [selected,setselected] = useState(0);

    return (
        <div className='w-[61rem] my-3 border-t-[1px] border-grey'>
            <div className='flex justify-center'>
                <button onClick={()=> setselected(0)} className={`flex items-center py-4 px-3 mx-4 ${selected === 0? "border-t-[1px]":"border-0"} text-sm`}><IoMdGrid className='text-xl mx-2'/> POSTS</button>
                <button onClick={()=> setselected(1)} className={`flex items-center py-4 px-3 mx-4 ${selected === 1? "border-t-[1px]":"border-0"} text-sm`}>
                    <img src="/assets/images/icons8-save.svg" className='text-white cursor-pointer h-6 mx-2' alt="save icon" />
                    SAVED
                </button>
                <button onClick={()=> setselected(2)} className={`flex items-center py-4 px-3 mx-4 ${selected === 2? "border-t-[1px]":"border-0"} text-sm`}><FaUserTag className='text-xl mx-2'/> TAGGED</button>
            </div>
            <div className='grid grid-cols-12 w-max space-x-1 space-y-1'>
                {posts.map((index,iter)=>{
                    return (
                        <PostCard key={iter} index={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default PostsTable