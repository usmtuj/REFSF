import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const API_KEY = '8bc8ecbc-1df7-494c-86be-83851dce71e2'

export default function MovieListPage() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
  })

  const [filters, setFilters] = useState({
    yearFrom: '',
    ratingFrom: '',
  })

  useEffect(() => {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?page=${page}&order=RATING&type=ALL&ratingFrom=${
      filters.ratingFrom || 1
    }&yearFrom=${filters.yearFrom || 1900}`
    fetch(url, {
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.films || []))
      .catch(console.error)
  }, [page, filters])

  const toggleFavorite = (id) => {
    const newFavs = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id]
    setFavorites(newFavs)
    localStorage.setItem('favorites', JSON.stringify(newFavs))
  }

  return (
    <div style={{ padding: 20 }}>
      <div>
        <input
          type="number"
          placeholder="Год от"
          value={filters.yearFrom}
          onChange={(e) => setFilters({ ...filters, yearFrom: e.target.value })}
        />
        <input
          type="number"
          placeholder="Рейтинг от"
          value={filters.ratingFrom}
          onChange={(e) =>
            setFilters({ ...filters, ratingFrom: e.target.value })
          }
        />
        <button onClick={() => setFilters({ yearFrom: '', ratingFrom: '' })}>
          Сбросить
        </button>
      </div>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 20 }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.filmId}
            movie={movie}
            isFavorite={(id) => favorites.includes(id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>
          Назад
        </button>
        <span style={{ margin: '0 10px' }}>Страница {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Вперёд</button>
      </div>
    </div>
  )
}
