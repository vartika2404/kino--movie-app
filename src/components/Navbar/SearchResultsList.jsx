import React from "react";
import { Link } from "react-router-dom";
import "./SearchResultsList.css";

// Yahan setResults ko add karein
const SearchResultsList = ({ results, setResults }) => {
  return (
    <div className="results-list">
      {results.map((movie) => (
        <Link
          key={movie.id}
          className="search-result"
          to={`/movie/${movie.id}`}
          
          onClick={() => setResults([])} 
        >
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />

          <div>
            <h4>{movie.title}</h4>
            <p>{movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResultsList;