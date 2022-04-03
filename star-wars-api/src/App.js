import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = 'https://react-test-242e7-default-rtdb.firebaseio.com/movies.json'

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      //!https://react-test-242e7-default-rtdb.firebaseio.com/movies.json

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();

      const loadedMovies = [];

      for(const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });

      setMovies(loadedMovies)
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  },[]);

  const addUser = async(data,url) => {
    //const data = {titleRef,openingTextRef,releaseDateRef}
    try {
      const options = {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      const res = await fetch(url,options);
  
      if(!res.ok){
        throw new Error("Something went wrong")
      }
  
      const json  = await res.json()
      console.log(json);
      setMovies(prevMovies => [...prevMovies,data])
    } catch (error) {
      console.log(error);
    }

  } 


  function addMovieHandler(movie){
    console.log(movie);
    addUser(movie,url);
  }


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
          <AddMovie onAddMovie={addMovieHandler}/>
          {isLoading && <p>Movies are loading...</p>}
          {!isLoading && movies.length === 0 && <p>Found No Movies</p>}
          {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        </section>
      </React.Fragment>
    );
  }
}

export default App;
