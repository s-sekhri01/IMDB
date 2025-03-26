import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
