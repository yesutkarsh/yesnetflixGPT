import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./storeSlice/movieSlice";
import userReducer from "./storeSlice/userSlice";
import SearchReducer from "./storeSlice/SearchSlice";
export default configureStore({
    reducer:{
        user: userReducer,
        movies:movieReducer,
        search:SearchReducer,
    },
})