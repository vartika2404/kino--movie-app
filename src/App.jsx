import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import Footer from "./components/Footer/Footer";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

       
        <Route
          path="/"
          element={
            <>
              <MovieList type="popular" title="Popular" />
      <MovieList type="top_rated" title="Top Rated" />
      <MovieList type="upcoming" title="Upcoming" />
            </>
          }
        />

        
        <Route path="/movie/:id" element={<MovieDetails />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;