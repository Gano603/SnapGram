import React from 'react'
import UserCard from './UserCard'
import { Link } from 'react-router-dom'
import {SuggestionFooter} from '../../../index'

const SuggestionBox = () => {
  return (
    <div className='w-[35%]'>
      <div className='w-[20rem] px-4 my-10'>
        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true}/>
        <div className='flex my-6 justify-between'>
          <h3 className='text-[0.9rem] text-gray-400'>Suggested for you</h3>
          <Link to={"#"} className='text-sm font-semibold'>See All</Link>
        </div>
        <UserCard id1={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={false}/>
        <UserCard id1={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={false}/>
        <UserCard id1={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={false}/>
        <UserCard id1={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={false}/>
        <UserCard id1={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={false}/>
        <SuggestionFooter />
      </div>
    </div>
  )
}

export default SuggestionBox