import React, { useState } from 'react';
import "./Navbar.css";
import SearchBar from './SearchBar';
import SearchResultsList from './SearchResultsList';

const Navbar = () => {
  const [results, setResults] = useState([]);

  return (
    <nav className='navbar'>
      {/* Wapas wahi simple h1, koi extra Link coding nahi */}
      <h1>KinO</h1>

      <div className="navbar_links">
        <a href="/">Home</a>
        <a href="#popular">Popular</a>
        <a href="#top_rated">Top Rated</a>
        <a href="#upcoming">Upcoming</a>
      </div>

      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results.length > 0 && (
          <SearchResultsList results={results} setResults={setResults} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;