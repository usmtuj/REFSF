import React, { useState } from 'react';
import './styles/Style.css'
import { useMovie } from './UseMovie';
import MovieList from './components/MovieList';
import SearchMovies from './components/SearchMovies';
import AddMovie from './components/AddMovie';

function App() {
  const { movies, addMovies, searchMovies, loading } = useMovie();
  console.log(movies)
  return (
    <div className='App'>
      <h1>Поиск фильмов(;</h1>
      <SearchMovies searchMovies={searchMovies}/>
        
      {loading && <p>Loading...</p>}
      <AddMovie addMovies={addMovies} />
      <MovieList movies={movies} />
    </div>
  );
}


export default App;