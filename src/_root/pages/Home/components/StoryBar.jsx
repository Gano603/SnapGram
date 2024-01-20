import React from 'react'
import StoryCard from './StoryCard'

const StoryBar = () => {
  return (
    <div className='w-[33rem] mx-12 flex'>
        <StoryCard imgUrl={"/assets/images/profile.png"} id={"fluffyguy"}/>
        <StoryCard imgUrl={"/assets/images/profile.png"} id={"fluffyguy"}/>
        <StoryCard imgUrl={"/assets/images/profile.png"} id={"fluffyguy"}/>
    </div>
  )
}

export default StoryBar