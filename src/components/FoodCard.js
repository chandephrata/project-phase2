import React from 'react'
import "./FoodCard.css"

function FoodCard({dish}) {
  return (
    <div className='container'>
      <div className="simfood">
          <h1>{dish.name}</h1>
          <img className="foodPic" src={dish.image} alt={dish.name}></img>
          <p>{dish.description}</p>
      </div>
    </div>
  )
}

export default FoodCard