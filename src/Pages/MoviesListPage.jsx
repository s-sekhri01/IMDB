import React, { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import Pagination from "../components/Pagination";

const MoviesListPage = ({ watchlist, setWatchlist }) => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = (pageNo) => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      });
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return (
    <div className="movies-list-page">
      <h1>Movies List</h1>
      <MoviesList
        movies={movies}
        watchlist={watchlist}
        setWatchlist={setWatchlist}
      />
      <div className="pagination-section">
        <Pagination onPageChange={fetchMovies} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default MoviesListPage;
