import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:true
}

const stateSlice = createSlice({
    name:"States",
    initialState,
    reducers:{
        setIsLoggedIn:(state,action) =>{
            state.isLoggedIn = action.payload;
        }
    }
})

export const {setIsLoggedIn} = stateSlice.actions;

export default stateSlice.reducer