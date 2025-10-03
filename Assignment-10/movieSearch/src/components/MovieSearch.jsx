import React, { useState, useEffect } from "react";
import '../styles/MovieSearch.css'

const MovieSearch = () => {
  const [query, setQuery] = useState("one percenter");
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?t=${query}&apikey=267ee006`
        );
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError("Movie not found!");
          setMovie(null);
        }
      } catch (err) {
        setError("Something went wrong!");
      }
      setLoading(false);
    };

    if (query) {
      fetchMovie();
    }
  }, [query]); // When the user searches anything new the query updates.

  console.log({ movie });

  return (
    <div className="movie-search-page">
      <div className="movie-search-everything" style={{ textAlign: "center" }}>
        <h2 className="movie-search-page-title">🎬 Movie Search App</h2>
        <input
          type="text"
          placeholder="Enter movie name..."
          onKeyDown={(e) => e.key === "Enter" && setQuery(e.target.value)}
        />
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {movie && (
          <div className="movie-details">
            <div className="movie-imageAndTitle">
              <img className="movie-poster" id="movie-poster-id" src={movie.Poster} alt={movie.Plot} />
              <h3 className="movie-title">{movie.Title} ({movie.Year})</h3>
            </div>

            <p className="movie-rating">⭐ imdbRating: {movie.imdbRating}</p>
            <p className="movie-genre">Genre: {movie.Genre}</p>
            <p className="movie-runtime">Runtime: {movie.Runtime}</p>
            {/* <p className="movie-plot">Plot: {movie.Plot}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;