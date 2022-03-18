import React,{useState, useEffect} from 'react'
import Movie from './components/Movie';
import Form from './components/Form';
import {apiRequest} from './Helpers/apiRequest'
import ReactDOM  from 'react-dom';
import './App.css';

function App() {

  let baseUrl = 'https://api.tvmaze.com/singlesearch/shows?q=';

  const [movies,setMovies] = useState([]);


  useEffect(() => {
    const movies_ = JSON.parse(localStorage.getItem('Movies'))
    if(movies_) setMovies(movies_)
  },[])

  useEffect(() => {
    localStorage.setItem('Movies',JSON.stringify(movies))
  },[movies])


  function getMovie(movie){
    console.log(movie);
    //! Api Req

    apiRequest(baseUrl + movie)
    .then(jsonData => {
      const {image,name,summary,rating} = jsonData;
      setMovies(prevMovies => {
        return [...prevMovies,{name:name,img:image.medium,rating:rating.average,summary:summary}]
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  function onClearMovies(){
    localStorage.removeItem('Movies')
  }

  return (
    <div className='App'>
      {ReactDOM.createPortal(<Form onClearMovies={onClearMovies} onSearch={getMovie}/>,document.getElementById('form-root'))}
        {movies.length > 0 ? movies.map(movie => (
           <Movie key={Math.random()} movie={movie}/>
        )):
          <h1 style={{color:"white"}}>No Movies</h1>
        }
    </div>
  );
}

export default App;
