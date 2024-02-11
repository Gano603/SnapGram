import React from 'react'
import Video from './components/Video'
import Navigation from './components/Navigation'

const Reels = () => {
  return (
    <div className='w-full h-full flex'>
      <div className='w-full flex flex-col my-12 items-center'>
        <Video />
      </div>
      <Navigation />
    </div>
  )
}

export default Reels