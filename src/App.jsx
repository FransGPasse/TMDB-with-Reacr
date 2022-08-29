import "../index.css";

import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import NotFoundPage from "./pages/NotFoundPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import SingleMoviePage from "./pages/SingleMoviePage";
import GenresPage from "./pages/GenresPage";
import SingleGenrePage from "./pages/SingleGenrePage";
import TopRatedPage from "./pages/TopRatedPage";
import PersonPage from "./pages/PersonPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="bg-white">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<HomePage />} />

          {/* Movie paths */}
          <Route path="/popular" element={<PopularMoviesPage />} />
          <Route path="/now_playing" element={<NowPlayingPage />} />
          <Route path="/top_rated" element={<TopRatedPage />} />

          <Route path="/movie/:id" element={<SingleMoviePage />} />

          {/* Genre paths */}
          <Route path="/genres" element={<GenresPage />} />
          <Route path="/genres/:id" element={<SingleGenrePage />} />

          {/* Actor paths */}
          <Route path="/person/:id" element={<PersonPage />} />

          {/* Not found page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <ReactQueryDevtools />
      </div>
    </div>
  );
}

export default App;
