import { configureStore } from "@reduxjs/toolkit";
import states from '../features/StateSlice'
import userData from '../features/userSlice'
import posts from '../features/postsSlice'
import displayPost from '../features/displayPost'

export const Store = configureStore({
    reducer:{states,userData,posts,displayPost}
})