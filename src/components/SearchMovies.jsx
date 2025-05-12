import React, { useState } from 'react';

const SearchMovies = ({searchMovies}) => {
    const [query, setQuery] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault(); 
        searchMovies(query);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Введите Название ФИльма' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type='submit'>ок</button>
        </form>
    )
}

export default SearchMovies;