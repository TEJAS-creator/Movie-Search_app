import MovieCard from "../components/MovieCard";

function Favorites({ favorites, toggleFavorite }) {
  return (
    <div className="favorites-container">
      <h1>Your Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
