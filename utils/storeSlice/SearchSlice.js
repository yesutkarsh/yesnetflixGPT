import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState: {
        showGptSearch: false
    },
    reducers:{
        tooggleGptSearch:(state, action)=>{
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export const {tooggleGptSearch}= searchSlice.actions
export default searchSlice.reducer