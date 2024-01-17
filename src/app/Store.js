import { configureStore } from "@reduxjs/toolkit";
import states from '../features/StateSlice'

export const Store = configureStore({
    reducer:{states}
})