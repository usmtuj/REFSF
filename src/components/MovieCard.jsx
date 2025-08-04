import { Link } from 'react-router-dom'

export default function MovieCard({ movie, onToggleFavorite, isFavorite }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, width: 200 }}>
      <img
        src={movie.posterUrlPreview}
        alt={movie.nameRu}
        style={{ width: '100%' }}
      />
      <h3>{movie.nameRu}</h3>
      <p>{movie.year}</p>
      <button onClick={() => onToggleFavorite(movie.filmId)}>
        {isFavorite(movie.filmId) ? '❤️' : '🤍'}
      </button>
      <Link to={`/movie/${movie.filmId}`}>Подробнее</Link>
    </div>
  )
}
