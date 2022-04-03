import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("https://swapi.dev/api/films/");
      //!https://react-test-242e7-default-rtdb.firebaseio.com/

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies((prevMovies) => {
        return [...prevMovies, ...transformedMovies];
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  },[]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (!isLoading && error) {
    return <p style={{ color: "white" }}>{error}</p>;
  } else {
    return (
      <React.Fragment>
        <section>
          <button onClick={fetchMovies}>Fetch Movies</button>
        </section>
        <section>
          <AddMovie />
          {isLoading && <p>Movies are loading...</p>}
          {!isLoading && movies.length === 0 && <p>Found No Movies</p>}
          {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        </section>
      </React.Fragment>
    );
  }
}

export default App;
