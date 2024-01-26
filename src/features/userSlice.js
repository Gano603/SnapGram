import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    email:"",
    id:"",
    createdAt:"",
    profilePic:"",
    posts:[]
}


export const userSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        getData:(state,action)=>{
            return state
        },
        setData:(state,action)=>{
            return {...action.payload}
        }
    }
})

export const {getData,setData} = userSlice.actions

export default userSlice.reducer