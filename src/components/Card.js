import React from 'react'
import { Link } from 'react-router-dom'

function Card({image,name,price}) {
    return (
        <div className='card'>
            <img src={image} alt="vegan" />
            <h2>{name}</h2>
            <h3>Price : ${price}</h3>
            <button><Link style={{textDecoration:"none",color:"#ffffff"}} to='/'>Order Now</Link></button>
        </div>
    )
}

export default Card