// MovieList.js
import React from 'react';

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => ( 
        <div key={movie.id} className="movie-card" onClick={() => onMovieClick(movie)}> 
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /> 
          <h2>{movie.title}</h2> 
          <p>{movie.release_date}</p> 
        </div>
      ))}
    </div>
  );
}

export default MovieList; 

