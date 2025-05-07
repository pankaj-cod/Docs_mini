import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.imdbID}`}>
    <div className="card">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
      <h2 className="title">{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  </Link>
);

export default MovieCard;
