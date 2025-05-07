import React from "react";
import { useGlobalContext } from "../context";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const { movies, setQuery, loading } = useGlobalContext();

  return (
    <div className="Hero">
      <input
        className="Search"
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
