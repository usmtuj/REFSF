import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const API_KEY = '8bc8ecbc-1df7-494c-86be-83851dce71e2'

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
  })
  const [movies, setMovies] = useState([])

  useEffect(() => {
    Promise.all(
      favorites.map((id) =>
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
          headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
          },
        }).then((res) => res.json())
      )
    ).then(setMovies)
  }, [favorites])

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id]
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Избранные фильмы</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.kinopoiskId}
            movie={{
              filmId: movie.kinopoiskId,
              nameRu: movie.nameRu,
              year: movie.year,
              posterUrlPreview: movie.posterUrlPreview || movie.posterUrl,
            }}
            isFavorite={(id) => favorites.includes(id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  )
}
