import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=927b78fd64eb02b074db057397966ae9`
      );
      const data = await res.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="details_container">

      
      <div
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }}
      ></div>

      
      <div className="details_content">

        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="info">

          <h1>{movie.title}</h1>

          <p className="tagline">{movie.tagline}</p>

          <p className="overview">{movie.overview}</p>

          <div className="meta">
            <p>⭐ Rating: {movie.vote_average}</p>
            <p>📅 Release: {movie.release_date}</p>
            <p>⏱ Runtime: {movie.runtime} min</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MovieDetails;