import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import StoryBar from './StoryBar'
import axios from 'axios'

const Mainbar = () => {

  const [data, setdata] = useState([])

  const contentFetch = async() =>{
    const dat = await axios.get(import.meta.env.VITE_API_URL+'files/getallposts')
    // console.log(dat.data.details)
    setdata(dat.data.details)
  }


  useEffect(()=> {
    contentFetch();
  })


  return (
    <div className='w-[65%] flex flex-col items-center py-8'>
      <StoryBar />
      {data.map((index,iter)=>{
        return <PostCard key={iter} userId={index.userId} caption={index.caption} img={index.imgPath} likes={index.likes} timePosted={index.timePosted}/>
      })}
    </div>
  )
}

export default Mainbar