import { configureStore } from "@reduxjs/toolkit";
import states from '../features/StateSlice'
import userData from '../features/userSlice'

export const Store = configureStore({
    reducer:{states,userData}
})