import React, { useState } from "react";

const MovieList = ({ movies }) => {
    console.log(movies);
    return (
        <ul className="movie-list">
            {movies.map((movie) => (
                <li key={movie.kinopoiskID} className="movie-item">
                    <img src={movie.posterUrlPreview} alt={movie.nameRu} />
                    <div className="movie-details">
                        <h3>{movie.nameRu}</h3>
                        <p>Year: {movie.year}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default MovieList;