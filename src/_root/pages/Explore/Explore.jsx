import React from 'react'
import PostCard from '../Profile/components/PostCard'
import Postvideo from './components/Postvideo'

const Explore = () => {
  return (
    <div className='w-full flex flex-col items-center my-5'>
      <div className='grid grid-cols-12 space-x-1 space-y-1 grid-rows-2'>
        <PostCard imgSrc={"/assets/images/pexels-pixabay-206359.jpg"} />
        <PostCard imgSrc={"/assets/images/pexels-pixabay-206359.jpg"} />
        <Postvideo imgSrc={"/assets/images/pexels-pixabay-206359.jpg"} />
        <PostCard imgSrc={"/assets/images/pexels-pixabay-206359.jpg"} />
        <PostCard imgSrc={"/assets/images/pexels-pixabay-206359.jpg"} />
      </div>
      <div className='grid grid-cols-12 space-x-1 space-y-1 grid-rows-2'>
        <Postvideo imgSrc={"/assets/images/pexels-pixabay-206359.jpg"} />
        <PostCard imgSrc={"/assets/images/pexels-pixabay-206359.jpg"} />
        <PostCard imgSrc={"/assets/images/pexels-pixabay-206359.jpg"} />
        <PostCard imgSrc={"/assets/images/pexels-pixabay-206359.jpg"} />
        <PostCard imgSrc={"/assets/images/pexels-pixabay-206359.jpg"} />
      </div>
    </div>
  )
}

export default Explore