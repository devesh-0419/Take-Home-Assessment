import React, { useState, useEffect } from 'react';
import MoviesList from './MovieList'
import logo from './logo.svg';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/movies');
      const payload = await response.json();
      setMovies(payload.data);
    }
    getData();
  }, []);
  return (
   <>
     <main>
      <MoviesList movies={movies}/>
     </main>
     {/* <p>{JSON.stringify(movies)}</p> */}
   </>
  );
}

export default App;
