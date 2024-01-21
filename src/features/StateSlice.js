import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:true,
    isSearchOpen:false,
    isNotificationOpen:false,
    isNavbarMinimize:true,
    isInitialChatbox:true
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
        },
        setIsNotificationOpen:(state,action) =>{
            state.isNotificationOpen = action.payload;
        },
        setIsNavbarMinimized:(state,action) =>{
            state.isNavbarMinimize = action.payload;
        },
        setIsInitialChatbox:(state,action) =>{
            state.isInitialChatbox = action.payload;
        }
    }
})

export const {setIsLoggedIn,setIsSearchOpen,setIsNotificationOpen,setIsNavbarMinimized,setIsInitialChatbox} = stateSlice.actions;

export default stateSlice.reducer