import React, { useEffect, useState } from 'react'
import ProfileHeader from './components/ProfileHeader';
import PostsTable from './components/PostsTable';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayUser } from '../../../features/displayUser';
import { useParams } from 'react-router-dom';


const Profile = () => {
  const [postData, setpostData] = useState([]);
  const disp = useDispatch();
  const {id} = useParams();

  const {id:userId} = useSelector(state => state.userData);

  const [first, setfirst] = useState(0);

  const fetchPosts = async () => {
    if (first !== undefined) {
      await axios.get(import.meta.env.VITE_API_URL + `files/getuserposts/${id}/${first}`,
        { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            setfirst(res.data.next);
            setpostData(res.data.posts);
            disp(setDisplayUser(res.data.user));
          }
        })
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])
  return (
    <div className='w-full flex flex-col items-center'>
      <ProfileHeader user={userId === id} />
      <PostsTable posts={postData} />
    </div>
  )
}

export default Profile