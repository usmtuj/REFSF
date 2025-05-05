import React, { useState } from 'react';

const AddMovie = ({addMovies}) => {
    const [movie, setMovie] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovies(movie);
        setMovie('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={movie} onChange={(e) => setMovie(e.target.value)} />
            <button type="submit">добавить</button>
        </form>
    );
}

export default AddMovie;