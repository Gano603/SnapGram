import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    posts:[]
}


export const postSlice = createSlice({
    name:'PostSlice',
    initialState,
    reducers:{
        setPost:(state,action)=>{
            state.posts.push(action.payload)
        }
    }
})

export const {setPost} = postSlice.actions;

export default postSlice.reducer