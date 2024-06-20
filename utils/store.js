import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./storeSlice/movieSlice";
import userReducer from "./storeSlice/userSlice";
export default configureStore({
    reducer:{
        user: userReducer,
        movies:movieReducer
    },
})