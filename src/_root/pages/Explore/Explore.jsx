import React, { useEffect, useState } from 'react'
import PostCard from '../Profile/components/PostCard'
import Postvideo from './components/Postvideo'
import axios from 'axios'

const Explore = () => {


  const [allPosts,setallPosts] = useState([]);

  const fetchPosts = async() =>{
    const data = await axios.get(import.meta.env.VITE_API_URL+'files/getallposts')
    setallPosts(data.data.details)

  }

  useEffect(()=>{
    fetchPosts();
  },[])


  return (
    <div className='w-full flex flex-col items-center my-5'>
      <div className='grid grid-cols-12 space-x-1 space-y-1 grid-rows-2'>
        {allPosts?.map((index,iter)=>{
          if(iter % 10=== 2 || iter % 10 === 5){
            return <Postvideo imgSrc={"/assets/images/pexels-pixabay-206359.jpg"} />
          }
          else{
            return <PostCard key={iter} imgSrc={index.imgPath[0].path} likes={index.likes} comments={index.comments.length} />
          }
        })}
      </div>
      </div>
  )
}

export default Explore