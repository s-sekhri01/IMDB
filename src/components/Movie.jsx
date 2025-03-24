const Movie = ({ movie, watchlist, setWatchlist }) => {
  const addToWatchlist = () => {
    setWatchlist({ ...watchlist, [movie.id]: movie });
    // console.log(watchlist);
  };

  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <button onClick={addToWatchlist}>
          {" "}
          {watchlist[movie.id] ? "-" : "+"}Watchlist
        </button>
      </div>
    </div>
  );
};

export default Movie;
