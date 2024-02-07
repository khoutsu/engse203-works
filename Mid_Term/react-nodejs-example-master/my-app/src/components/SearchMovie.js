import React, { useState } from 'react';
import { searchMovie } from '../services/MovieService';

const SearchMovie = ({ setMovies, setNumberOfMovies }) => {
  const [searchText, setSearchText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    // Check if the search text is empty
    if (!searchText.trim()) {
      setErrorMessage('Please enter a movie title for search.');
      return;
    }

    try {
      const response = await searchMovie(searchText);
      if (response.statusCode === 200) {
        setMovies(response.data);
        setNumberOfMovies(response.data.length);
        setErrorMessage('');
      } else {
        setMovies([]);
        setNumberOfMovies(0);
        setErrorMessage(response.message || 'No movie found');
      }
    } catch (error) {
      console.error('Error searching movie:', error);
      setMovies([]);
      setNumberOfMovies(0);
      setErrorMessage('Error searching movie');
    }
  };

  return (
    <div>
      <h2>Movie Search</h2>
      <div >
        <input 
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter movie title"
        />
        <button type="button" className="btn btn-warning" onClick={handleSearch}>Search</button>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default SearchMovie;