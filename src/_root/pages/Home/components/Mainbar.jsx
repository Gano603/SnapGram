import React from 'react'
import PostCard from './PostCard'
import StoryBar from './StoryBar'

const Mainbar = () => {
  return (
    <div className='w-[65%] flex flex-col items-center py-8'>
      <StoryBar />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}

export default Mainbar