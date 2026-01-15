// Importing required hooks from React
// useState is used to store data
// useEffect is used to run code when page loads
import { useEffect, useState } from "react";

// Importing MovieCard component to display each movie
import MovieCard from "./components/MovieCard";

// Importing CSS file for styling
import "./App.css";

function App() {

  // State to store list of movies fetched from API
  const [movies, setMovies] = useState([]);

  // useEffect runs only once when the component loads
  // This is the right place to call API
  useEffect(() => {
    fetchMovies();
  }, []);

  // Function to fetch movie data from TMDb API
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/collection/86311?api_key=97cafd0d3ca5c34ce6aab4ba75ff052c&language=en-US"
      );

      // Converting response to JSON format
      const data = await response.json();
      console.log("API RESPONSE:", data);

      // 'parts' contains the list of movies inside the collection
      // Storing movie list in state
      setMovies(data.parts || []);

    } catch (error) {
      // If API fails, error will be printed in console
      console.log("Error fetching movies", error);
    }
  };

  return (
    <div className="App">

      {/* Application heading */}
      <h1>Movie Collection App</h1>

      {/* Container to hold all movie cards */}
      <div className="movie-list">

        {/* Looping through movies array and rendering MovieCard */}  
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}

            // Creating full image URL using poster_path
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
