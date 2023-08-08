// SearchResults.js
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get("q");
    if (!searchQuery) {
      setLoading(false);
      setError("Please enter a movie title to search.");
      return;
    }

    axios
      .get(
        `https://omdbapi.com?apikey=YOUR_API_KEY&s=${encodeURIComponent(
          searchQuery
        )}`
      )
      .then((response) => {
        setMovies(response.data.Search || []);
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, [location.search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
