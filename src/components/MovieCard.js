// MovieCard component receives data using props
// Props are passed from App.js
function MovieCard({ title, releaseDate, poster }) {
  return (
    <div className="movie-card">

      {/* Movie poster image */}
      <img src={poster} alt={title} className="movie-poster" />

      <div className="movie-info">
        
        {/* Movie title */}
        <h3>{title}</h3>

        {/* Movie release date */}
        <p>Release Date: {releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
