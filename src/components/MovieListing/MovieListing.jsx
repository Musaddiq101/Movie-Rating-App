import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import {Settings} from "../../common/settings";
import "./MovieListing.scss";

const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies = "";
    let renderShows = "";

    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => {
            return (
                <MovieCard key={index} data={movie} />
            )
        })
    ) : (<div className='movies-error'>
            <h3>{movies.Error}</h3>
        </div>)

    renderShows = shows.Response === "True" ? (
        shows.Search.map((show, index) => {
            return (
                <MovieCard key={index} data={show} />
            )
        })
    ) : (<div className='movies-error'>
            <h3>{movies.Error}</h3>
        </div>)

    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...Settings}>{renderMovies}</Slider>
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                <Slider {...Settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    );
};

export default MovieListing;