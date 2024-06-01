import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk( "movies/fetchAsyncMovies", async () => {
    const movieText = "Harry";
    try {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
        return (response.data);
        
    } catch(err) {
        console.log("Error", err);
    };
    }
)


export const fetchAsyncShows = createAsyncThunk( "movies/fetchAsyncShows", async () => {
    const seriesText = "Friends";
    try {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`);
        return (response.data);
        
    } catch(err) {
        console.log("Error", err);
    };
    }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk( "movies/fetchAsyncMovieOrShowDetail", async (id) => {
    try {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        return (response.data);
        
    } catch(err) {
        console.log("Error", err);
    };
    }
);

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow : (state) => {
            state.selectedMovieOrShow = {};
        },
    },
    extraReducers : (builder) => {
       builder.addCase(fetchAsyncMovies.pending, () => {
        console.log("The pending is working");
       }).addCase(fetchAsyncMovies.fulfilled, (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, movies: payload}
       });

        builder.addCase(fetchAsyncShows.pending, () => {
            console.log("The pending is working");
        }).addCase(fetchAsyncShows.fulfilled, (state, {payload}) => {
                console.log("fetched successfully");
                return {...state, shows: payload}
        })

        builder.addCase(fetchAsyncMovieOrShowDetail.pending, () => {
            console.log("The pending is working");
        }).addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, {payload}) => {
                console.log("fetched successfully");
                return {...state, selectedMovieOrShow: payload}
        })

        
    }

});

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;