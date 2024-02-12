import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    post:[],
    user:{}
}

export const displayPostSlice = createSlice({
    name:'Display Post Slice',
    initialState,
    reducers:{
        setData:(state,action) => {
            return {...action.payload}
        },
        getData:(state,action) => {
            return state
        }
    }
})

export const {setData,getData} = displayPostSlice.actions

export default displayPostSlice.reducer