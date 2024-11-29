import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch movie details");
        return response.json();
      })
      .then((data) => setMovie(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Time: {movie.time}</p>
        <h3>Genres</h3>
        <ul>
          {movie.genres?.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Movie;
