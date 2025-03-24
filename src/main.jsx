import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import MoviesListPage from "./Pages/MoviesListPage.jsx";
import MoviesDetailsPage from "./Pages/MoviesDetailsPage.jsx";
import WatchListPage from "./Pages/WatchlistPage.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
    <Header />
      <Routes>
        <Route path="/" element={<MoviesListPage />} />
        <Route path="/details" element={<MoviesDetailsPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
        <Route path="*" element={<h1>Page Not Found !</h1>} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
