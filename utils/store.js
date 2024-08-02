import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./storeSlice/movieSlice";
import SearchReducer from "./storeSlice/SearchSlice";
export default configureStore({
    reducer:{
        movies:movieReducer,
        search:SearchReducer,
    },
})