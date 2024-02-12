import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import StoryBar from './StoryBar'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Mainbar = () => {

  const [data, setdata] = useState([])
  const [time, settime] = useState(0)
  const {id} = useSelector(state => state.userData);

  const contentFetch = async() =>{
    const dat = await axios.get(import.meta.env.VITE_API_URL+'files/getallposts');
    setdata(dat.data.details)
  }

  useEffect(()=> {
    if(time===0){
      settime(1)
      contentFetch()
    } 
  },[data])


  return (
    <div className='w-[65%] flex flex-col items-center py-8'>
      <StoryBar />
      {data?.map((index,iter)=>{
        return <PostCard key={iter} userId={index.user.id} userImage={index.user.profilePic} savedp={index.savedBy.includes(id)} likedp={index.likedBy.includes(id)} postId={index._id} caption={index.caption} img={index.imgPath} likes={index.likes} timePosted={index.timePosted} verified={index.verified}/>
      })}
    </div>
  )
}

export default Mainbar