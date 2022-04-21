import React from 'react'
import "./FoodCard.css"

function FoodCard({dish, handleLikeClick}) {
  function handleClick(event){
    handleLikeClick(event.target.value)
  }
  return (
    <div className='container'>
      <div className="simfood">
          <h1>{dish.name}</h1>
          <img className="foodPic" src={dish.image} alt={dish.name}></img>
          <p>{dish.description}</p>
          <button className="likeButton" value={dish.name} onClick={handleClick}>Like</button>
      </div>
    </div>
  )
}

export default FoodCard