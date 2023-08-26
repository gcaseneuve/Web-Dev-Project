import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <header className='banner' style = {{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url('https://wallpaperset.com/w/full/9/7/e/437954.jpg')`
    }}>
      
      <div className="banner__contents">
        <h1 className="banner__title">
          Movie Name
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
          This is the banner description.
        </h1>
        
      </div>
      <div className="banner--fadingBottom"></div>
    </header>
    
  )
}

export default Banner

