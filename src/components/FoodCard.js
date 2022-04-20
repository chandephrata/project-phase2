import React from 'react'

function FoodCard({dish}) {
  return (
    <div>
        <h1>{dish.name}</h1>
        <h1>{dish.description}</h1>
        <img src={dish.image}></img>
    </div>
  )
}

export default FoodCard