import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovieResults:null,
        gptMovieNames:null,
    },
    reducers:{
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movies} = action.payload;
            state.gptMovieResults = movies;
            state.gptMovieNames = movieNames;
        },
        clearGptResults: (state) => {
            state.gptMovieNames = null;
            state.gptMovieResults = null;
            state.error = null;
        },
    },
});

export const {toggleGptSearchView, addGptMovieResult, clearGptResults} = gptSlice.actions;
export default gptSlice.reducer;