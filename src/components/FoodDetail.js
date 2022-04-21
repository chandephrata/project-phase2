import React from 'react'
 import "./FoodDetail.css"


function FoodDetail({currentDishDetail, handleLikeClick, handleImageDetail}) {

  function handleImageClick(event){
    handleImageDetail(event.target.alt)
  }

  return (
    <div className='ingredients'>Food Detail: {currentDishDetail}
    <h1>{currentDishDetail.name}</h1>
    <img className="foodPic" src={currentDishDetail.image} alt={currentDishDetail.name} onClick={handleImageClick}></img>
    <p>{currentDishDetail.description}</p>
    <p>{currentDishDetail.ingredients}</p>
    </div>
  )
}

export default FoodDetail