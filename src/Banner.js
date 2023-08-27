import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './Axios';
import requests from './Request'
// import instance from './Axios';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
      );
      
      console.log(movie)
      return request;

    }
    fetchData();

  }, [])

  function truncate(string, n){
    if (string?.length > n){
      string = string.substr(0, n-1)+'...';
      return string;

    }else{
      return string;

    }

  }

  return (
    <header className='banner' style = {{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>
      
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">
            Play
          </button>
          <button className="banner__button">
            Add to list
          </button>
        </div>
        <h1 className="banner__description">
          {
            truncate (movie?.overview, 150)
          }
        </h1>
        
      </div>
      <div className="banner--fadingBottom"></div>
    </header>
    
  )
}

export default Banner

