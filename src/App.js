import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies("all");
  }, []);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=83c17a841a913692905d6af9be49ce97&query=${query}`
      );

      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      fetchMovies(searchQuery);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <h1>Movie Database App</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for movies..."
        />
        <button className='search-btn' type="submit">Search</button>
      </form>
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
      {selectedMovie && <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
}

export default App;
