import React from 'react'
import './HomeScreen.css'
import Nav from './Nav';
import Banner from './Banner';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* navbar */}
        <Nav />
        
        
        {/* banner */}
        <Banner/>
        {/* row */}
    
    </div>
  )
}

export default HomeScreen