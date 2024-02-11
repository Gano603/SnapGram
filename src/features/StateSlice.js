import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
    isSearchOpen:false,
    isNotificationOpen:false,
    isNavbarMinimize:false,
    isInitialChatbox:false,
    isCreatePost:false,
    multiplePagePopup:false,
    createPostExtend:false,
    caption:"",
    activeImage:0,
    isViewPost:false,
    isSettingMenuOpen:false,
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
        },
        setCreatePost:(state,action) =>{
            state.isCreatePost = action.payload;
        },
        setMultiplePagePopup:(state,action) =>{
            state.multiplePagePopup = action.payload;
        },
        setCreatePostExtend:(state,action) =>{
            state.createPostExtend = action.payload;
        },
        setCaption:(state,action) =>{
            state.caption = action.payload;
        },
        setActiveImage:(state,action) =>{
            state.activeImage = action.payload;
        },
        setIsViewPost:(state,action) =>{
            state.isViewPost = action.payload;
        },
        setIsSettingMenuOpen:(state,action) =>{
            state.isSettingMenuOpen = action.payload;
        }
    }
})

export const {setIsLoggedIn,setIsSearchOpen,setIsNotificationOpen,setIsNavbarMinimized,setIsInitialChatbox,setCreatePost,setMultiplePagePopup,setCreatePostExtend,setCaption,setActiveImage,setIsViewPost,setIsSettingMenuOpen} = stateSlice.actions;

export default stateSlice.reducer