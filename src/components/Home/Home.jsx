import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import MovieListing from "../MovieListing/MovieListing";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';

const Home = () => {

    const location = useLocation();
    const searchTerm = location.state?.searchTerm || "";
    const dispatch = useDispatch();
    const movieText = searchTerm ? searchTerm : "Top";
    const showText = searchTerm ? searchTerm : "Game";
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    }, [dispatch, searchTerm, movieText, showText]);


    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;