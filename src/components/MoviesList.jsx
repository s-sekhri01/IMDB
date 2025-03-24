import Movie from "./Movie";

const MoviesList = ({ movies, watchlist, setWatchlist }) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <Movie
          movie={movie}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
        />
      ))}
    </div>
  );
};

export default MoviesList;
