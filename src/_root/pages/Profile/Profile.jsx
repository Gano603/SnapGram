import React from 'react'
import ProfileHeader from './components/ProfileHeader';
import PostsTable from './components/PostsTable';


const Profile = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <ProfileHeader />
      <PostsTable />
    </div>
  )
}

export default Profile