import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const API_KEY = '8bc8ecbc-1df7-494c-86be-83851dce71e2'

export default function MovieDetailPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(setMovie)
      .catch(console.error)
  }, [id])

  if (!movie) return <div style={{ padding: 20 }}>Загрузка...</div>

  return (
    <div style={{ padding: 20 }}>
      <img src={movie.posterUrl} alt={movie.nameRu} style={{ width: 200 }} />
      <h1>
        {movie.nameRu} ({movie.year})
      </h1>
      <p>
        <strong>Жанры:</strong> {movie.genres.map((g) => g.genre).join(', ')}
      </p>
      <p>
        <strong>Описание:</strong> {movie.description}
      </p>
      <p>
        <strong>Рейтинг КП:</strong> {movie.ratingKinopoisk}
      </p>
    </div>
  )
}
