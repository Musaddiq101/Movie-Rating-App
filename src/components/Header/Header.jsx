import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import user from "../../images/userimg.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Header = () => {

    const [term, setTerm] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function submitHandler(event) {
        event.preventDefault();
        if (term === "") return alert("Please enter search term");
        navigate("/", {state: {searchTerm: term}});
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("");
    }

    return (
        <div className="header">
            <div className="logo" >
                <Link to="/">Movie App</Link>
            </div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => {
                        setTerm(e.target.value);
                    }}/>
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default Header;