import React from 'react'
import "./FoodCard.css"

function FoodCard({dish, handleLikeClick, handleImageDetail}) {
  function handleClick(event){
    handleLikeClick(event.target.value)
  }

  function handleImageClick(event){
    handleImageDetail(event.target.alt)
  }

  return (
    <div className='container'>
      <div className="simfood">
          <h1>{dish.name}</h1>
          <img className="foodPic" src={dish.image} alt={dish.name} onClick={handleImageClick}></img>
          <p>{dish.description}</p>
          </div>
          <button className="likeButton" value={dish.name} onClick={handleClick}>Like</button>
    </div>
  )
}

export default FoodCard