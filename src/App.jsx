import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { StrictMode, useState } from "react";
import Header from "./components/Header";
import MoviesListPage from "./Pages/MoviesListPage";
import MoviesDetailsPage from "./Pages/MoviesDetailsPage";
import WatchListPage from "./Pages/WatchlistPage";

function App() {
  const [watchlist, setWatchlist] = useState({});
  return (
    <BrowserRouter>
      <StrictMode>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MoviesListPage
                watchlist={watchlist}
                setWatchlist={setWatchlist}
              />
            }
          />
          <Route path="/details" element={<MoviesDetailsPage />} />
          <Route
            path="/watchlist"
            element={
              <WatchListPage
                watchlist={watchlist}
                setWatchlist={setWatchlist}
              />
            }
          />
          <Route path="*" element={<h1>Page Not Found !</h1>} />
        </Routes>
      </StrictMode>
    </BrowserRouter>
  );
}

export default App;
