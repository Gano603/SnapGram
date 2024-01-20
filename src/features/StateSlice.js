import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:true,
    isSearchOpen:false
}

const stateSlice = createSlice({
    name:"States",
    initialState,
    reducers:{
        setIsLoggedIn:(state,action) =>{
            state.isLoggedIn = action.payload;
        },
        setIsSearchOpen:(state,action) =>{
            state.isSearchOpen = action.payload;
        }
    }
})

export const {setIsLoggedIn,setIsSearchOpen} = stateSlice.actions;

export default stateSlice.reducer