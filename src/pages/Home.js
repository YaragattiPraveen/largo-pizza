import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/home.css'
function Home() {
  return (
    <>
      <div className='home'>
      <div className='home_container'>
        <span>Crunchy</span>
        <h1>Largo's Italian Pizza</h1>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <div className='btns'>
          <button><Link style={{textDecoration:"none",color:"#ffffff"}} to='/menu'>Order Now</Link></button>
          <button><Link style={{textDecoration:"none",color:"#ffffff"}} to='/menu'>Check out Menu</Link></button>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='title'>
          <h2>WELCOME TO PIZZA RESTAURANT</h2>
          <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. </p>
          <button>Read More</button>
      </div>
    </div>
    </>
    
  )
}

export default Home