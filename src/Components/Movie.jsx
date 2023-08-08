import React, { useState } from "react";

 

import { useEffect } from "react"; 
import "../App.css";
import MovieCard from "./MovieCard";
const API_URL = "https://omdbapi.com?apikey=fe2f6c44";

 
const Movie = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);

  };

  useEffect(() => {
    searchMovies("");
}, []);


  return (
    <div className="App">
      <h1> MOVIES</h1>
      <div className="search">
        <input
        placeholder="Search for Movies"
        value={searchTerm}
        onChange={(e) => {
            setSearchTerm(e.target.value);
         }}

        />
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/search-8041129-6414771.png"
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No found</h2>
        </div>
      )}
    </div>
  );

};

 

export default Movie;