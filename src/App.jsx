import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { StrictMode, useState } from "react";
import Header from "./components/Header";
import MoviesListPage from "./Pages/MoviesListPage";
import MoviesDetailsPage from "./Pages/MoviesDetailsPage";
import WatchListPage from "./Pages/WatchlistPage";
import WatchListProvider from "./contexts/WatchlistContext";

function App() {
  return (
    <BrowserRouter>
      <WatchListProvider>
        <StrictMode>
          <Header />
          <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/details" element={<MoviesDetailsPage />} />
            <Route path="/watchlist" element={<WatchListPage />} />
            <Route path="*" element={<h1>Page Not Found !</h1>} />
          </Routes>
        </StrictMode>
      </WatchListProvider>
    </BrowserRouter>
  );
}

export default App;
