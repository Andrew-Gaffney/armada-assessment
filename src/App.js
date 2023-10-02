import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import WebFont from 'webfontloader';
import { Oval } from 'react-loader-spinner';

import Header from './Header.js';
import RandomMovie from './RandomMovie.js'
import MostPopular from './MostPopular.js';
import apiKey from './apiKey.js';
import MovieProfile from './MovieProfile.js';
import ErrorPage from './ErrorPage.js';

function App() {

  const [randomMovie, setRandomMovie] = useState("");
  const [moviesData, setMoviesData] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    WebFont.load({
      google: {
        families: ['Roboto:100,400,500,700,900']
      }
    });

    fetch(`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`)
    .then(response => response.json())
    .then(data => {
      setRandomMovie(data.items[Math.floor(Math.random() * (100 - 1) + 1)]);
      setMoviesData(data.items);
      setIsLoading(false);
    })
    .catch(() => {
      setHasError(true);
    })
  }, [])

  return (
    <div>
      {hasError ? <ErrorPage /> : isLoading ? 
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      :
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="random" element={<RandomMovie moviesData={moviesData} movie={randomMovie} />} />
          <Route path="most-popular" element={<MostPopular moviesData={moviesData} />} />
          <Route path="movie/:id" element={<MovieProfile />} />
        </Route>
      </Routes>
    }
    </div>
  );
}

export default App;
