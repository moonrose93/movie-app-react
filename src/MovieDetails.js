// MovieDetails.js
import React from 'react';

function MovieDetails({ movie, onClose }) {
  return (
    <div className="movie-details">
      <button onClick={onClose}>Close</button>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      
    </div>
  );
}

export default MovieDetails;
