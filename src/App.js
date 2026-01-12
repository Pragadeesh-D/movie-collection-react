import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/collection/86311?api_key=97cafd0d3ca5c34ce6aab4ba75ff052c&language=en-US"
      );

      const data = await response.json();
      console.log("API RESPONSE:", data);

      // IMPORTANT: parts is the movie list
      setMovies(data.parts || []);
    } catch (error) {
      console.log("Error fetching movies", error);
    }
  };

  return (
    <div className="App">
      <h1>Movie Collection App</h1>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            poster={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
