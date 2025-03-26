import { useContext, useEffect, useState } from "react";
import { WatchListContext } from "../contexts/WatchlistContext";

let genreIdsMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const WatchListPage = () => {

  const {watchlist} = useContext(WatchListContext);

  const [localList, setLocalList] = useState([]);

  const searchMovies = (e) => {
    let searchValue = e.target.value;
    let filteredMovies = Object.values(watchlist).filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setLocalList(filteredMovies);
  };

  const filterMovies = (type) => {
    let filteredMovies = Object.values(watchlist).sort((a, b) =>
      type === "ASC" ? a.popularity - b.popularity : b.popularity - a.popularity
    );
    setLocalList(filteredMovies);
  };

  const fetchGenres = () => {
    let genreList = [];
    Object.values(watchlist).forEach((movie) => {
      movie.genre_ids.forEach((genre) => {
        if (!genreList.includes(genre)) {
          genreList.push(genre);
        }
      });
    });
    return genreList;
  };

  const filterBasedOnGenre = (genre) => {
    let filteredMovies = Object.values(watchlist).filter((movie) =>
      movie.genre_ids.includes(genre)
    );
    setLocalList(filteredMovies);
  };

  useEffect(() => {
    setLocalList(Object.values(watchlist));
  }, [watchlist]);

  return (
    <div>
      <h1>Watchlist</h1>
      <div className="container">
        <div className="left-section">
          <h3 className="genres">Filter Based On Genres</h3>
          <ul>
            <li onClick={() => setLocalList(Object.values(watchlist))}>All</li>
            {fetchGenres().map((genre) => (
              <li onClick={() => filterBasedOnGenre(genre)}>
                {genreIdsMap[genre]}
              </li>
            ))}
          </ul>
        </div>
        <div className="right-section">
          <input
            className="search-box"
            placeholder="search"
            onChange={searchMovies}
          ></input>
          <table border={1}>
            <tr>
              <td>Movie Id</td>
              <td>Poster</td>
              <td>Movie Name</td>
              <td>Genres</td>
              <td>
                Popularity{" "}
                <button onClick={() => filterMovies("ASC")}>↑</button>{" "}
                <button onClick={() => filterMovies("DESC")}>↓</button>
              </td>
            </tr>
            {Object.values(localList).map((movie) => (
              <tr>
                <td>{movie.id}</td>
                <td>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    height={100}
                  />
                </td>
                <td>{movie.title}</td>
                <td>
                  {movie.genre_ids
                    .map((genreIds) => genreIdsMap[genreIds])
                    .join(",")}
                </td>
                <td>{movie.popularity}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
export default WatchListPage;
