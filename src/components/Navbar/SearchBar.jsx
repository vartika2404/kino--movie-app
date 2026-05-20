import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ setResults }) => {

  const [input, setInput] = useState("");

  const fetchData = async (value) => {

    if(value.trim() === ""){
      setResults([]);
      return;
    }

    try {

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1&api_key=927b78fd64eb02b074db057397966ae9`
      );

      const json = await response.json();

      const results = json.results.filter((movie) => {

        return movie.title
          .toLowerCase()
          .includes(value.toLowerCase());

      });

      setResults(results);

    } catch (error) {

      console.log(error);

    }
  };



  const handleChange = (value) => {

    setInput(value);

    fetchData(value);

  };



  return (

    <div className="input-wrapper">

      <FaSearch id="search-icon" />

      <input
        placeholder="Search for movies..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />

    </div>

  );
};

export default SearchBar;