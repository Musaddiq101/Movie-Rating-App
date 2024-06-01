import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/MovieApiKey";
import { addMovies } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';

const Home = () => {

    const movieText = "Harry";
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
                dispatch(addMovies(response.data));
                console.log(response);
            } catch(err) {
                console.log("Error", err);
            };
        };
        fetchMovies();
    }, []);


    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;