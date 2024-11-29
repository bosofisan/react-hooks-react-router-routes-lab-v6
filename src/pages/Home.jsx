import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        <h3>Movies</h3>
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} id={movie.id} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
