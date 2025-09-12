import React, { useState, useEffect } from "react";

const MovieSearch = () => {
  const [query, setQuery] = useState("spiderman");
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?t=${query}&apikey=your_api_key`
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
  }, [query]); // query change hote hi new search

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>🎬 Movie Search App</h2>
      <input
        type="text"
        placeholder="Enter movie name..."
        onKeyDown={(e) => e.key === "Enter" && setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {movie && (
        <div>
          <h3>{movie.Title} ({movie.Year})</h3>
          <img src={movie.Poster} alt={movie.Title} />
          <p>⭐ Rating: {movie.imdbRating}</p>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;