import { useState } from "react";

export const useMovie = () => {
    const API_KEY = '3ed75dea-a556-4d84-bd47-0e334eade6df';
    const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [movies, setMovies] = useState(["moscow", "spb", "kazan"]);

     const searchMovies = async (query) => {
        if (!query) return;
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`${API_URL}?keyword=${query}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': API_KEY,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (data.items) {
                setMovies(data.items);
            } else {
                setMovies([]);
                setError("Фильмы не найдены");
            }
        console.log(data)
        } catch (error) {
            console.error('Ошибка при запросе:', error);
            setMovies([]);
            setError(error.message || "Произошла ошибка");
        } finally {
            setLoading(false);
        }
    };

    const addMovies = (movie) => {
        setMovies([...movies, movie]);
    };

    const removeMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
    };

    return {
        movies,
        addMovies,
        removeMovie,
        error,
        searchMovies,
        loading,
    };
};

