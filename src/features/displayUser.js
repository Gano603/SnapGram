import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user:{}
}


export const displayUserSlice = createSlice({
    name:'PostSlice',
    initialState,
    reducers:{
        setDisplayUser:(state,action)=>{
            return {...action.payload}
        }
    }
})

export const {setDisplayUser} = displayUserSlice.actions;

export default displayUserSlice.reducer