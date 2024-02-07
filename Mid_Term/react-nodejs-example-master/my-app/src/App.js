import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { DisplayBoard } from './components/DisplayBoard'
import { Movies } from './components/Movies'
import Createmovie from './components/CreateMovie'
import { getAllMovies, createMovie} from './services/MovieService'
import Searchmovie from './components/SearchMovie';

function App() {

  const [movie, setMovie] = useState({})
  const [movies, setMovies] = useState([])
  const [numberOfMovies, setNumberOfMovies] = useState(0)
  const [searchResults, setSearchResults] = useState([]);

  const movieCreate = () => {

    createMovie(movies)
      .then(response => {
        console.log(response);
        setNumberOfMovies(numberOfMovies+1)
    });
}


  const fetchAllMovies = () => {
    getAllMovies()
      .then(movies => {
        console.log(movies)
        setMovies(movies);
        setNumberOfMovies(movies.length)
        setSearchResults([]);
      });
  }

  useEffect(() => {
      getAllMovies()
      .then(movies => {
        console.log(movies)
        setMovies(movies);
        setNumberOfMovies(movies.length)
      });

  }, [])

  
  const onChangeForm = (e) => {
    if (e.target.name === 'title') {
        movie.title = e.target.value;
    } else if (e.target.name === 'genre') {
        movie.genre = e.target.value;
    } else if (e.target.name === 'director') {
        movie.director = e.target.value;
    } else if (e.target.name === 'release_year') {
        movie.release_year = e.target.value;
    }
    setMovie(movies)
}

    
   return (
  <div className="App">
    <Header></Header>
     <div className="container mrgnbtm">
      <div className="row">
   
       <div className="col-md-8">
            <Createmovie 
              Movies={Movies}
              onChangeForm={onChangeForm}
              createMovie={movieCreate}
              >
            </Createmovie>
        </div>
        <div className="col-md-4">
            <DisplayBoard
              numberOfMovies={numberOfMovies}
              getAllMovies={fetchAllMovies}
            >
            </DisplayBoard> 
        </div>
        <div className="col-md-4">
            <Searchmovie
              setMovies={setMovies}
              setNumberOfMovies={setNumberOfMovies}
              setSearchResults={setSearchResults}
            />
          </div>
      </div>          
    <div className="row mrgnbtm">
      <Movies movies={searchResults.length > 0 ? searchResults : movies}></Movies>
    </div>
  </div>
  </div>
);
}

export default App;
