function MovieCard({ movie, isFavorite, toggleFavorite }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>Released: {movie.release_date}</p>
      <button
        onClick={() => toggleFavorite(movie)}
        style={{
          background: "none",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          color: isFavorite ? "gold" : "#ccc",
        }}
        title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </div>
  );
}

export default MovieCard;
