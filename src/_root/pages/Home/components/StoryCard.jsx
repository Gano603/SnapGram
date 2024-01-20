import React from 'react'

const StoryCard = ({imgUrl,id,read}) => {
  return (
    <div className='flex flex-col items-center mx-2'>
        <img className={`my-1 p-[0.1rem] rounded-full w-[4rem] h-[4rem] ${read? "border-gray-600 border-[1px]":"border-blue-700 border-[2px]"} border-spacing-28`} src={imgUrl} alt={id} />
        <span className={`text-xs ${read? "text-gray-400":"text-white"}`}>{id}</span>
    </div>
  )
}

export default StoryCard