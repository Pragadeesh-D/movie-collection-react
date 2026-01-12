function MovieCard({ title, releaseDate, poster }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />

      <div className="movie-info">
        <h3>{title}</h3>
        <p>Release Date: {releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
