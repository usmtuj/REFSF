import React, { useState } from "react";

const MovieList = ({ movies }) => {
    console.log(movies);
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.kinopoiskID} className="movie">
                    {movie}
                </li>
            ))}
        </ul>
    );
}

export default MovieList;