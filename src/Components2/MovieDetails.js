// MovieDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://omdbapi.com?apikey=YOUR_API_KEY&i=${id}`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching movie details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>Release Date: {movie.Released}</p>
      <p>Plot: {movie.Plot}</p>
      {/* Additional movie details can be displayed here */}
    </div>
  );
};

export default MovieDetails;
