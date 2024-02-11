import React, { useEffect, useState } from 'react'
import ProfileHeader from './components/ProfileHeader';
import PostsTable from './components/PostsTable';
import axios from 'axios';


const Profile = () => {
  const [postData,setpostData] = useState([]);

  const [first,setfirst] = useState(0);
  const [last,setlast] = useState(6);

  const fetchPosts = async()=>{
    const res = await axios.get(import.meta.env.VITE_API_URL+`files/getuserposts/${first}/${last}`,
    {withCredentials: true});

    setpostData(res.data.posts);
  }

  useEffect(()=>{
    fetchPosts();
  },[first])
  return (
    <div className='w-full flex flex-col items-center'>
      <ProfileHeader posts={postData}/>
      <PostsTable posts={postData} />
    </div>
  )
}

export default Profile