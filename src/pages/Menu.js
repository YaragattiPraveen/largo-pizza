import React from 'react'
import '../styles/menu.css'
import Card from '../components/Card'
import data from '../helper/data'

function Menu() {
  return (
    <div className='menu_section'>
      <div className='menu'>
        <h1>Our Menu</h1>
        <div className='card_container'>
          {
            data.map((val,index) => {
              return (
                <Card image={val.image} 
                  name ={val.name}
                  price = {val.price}
                  key={index}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Menu