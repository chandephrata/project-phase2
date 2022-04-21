import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodDetail from './FoodDetail'
import './Home.css'

function Home({data, handleLikeClick}) {
  const [currentDishDetail, setCurrentDishDetail] = useState("");
  const [currentDish, setCurrentDish] = useState({});

  function handleImageDetail(name){
    setCurrentDishDetail(name);
    let currDish = data.find((dish) => {
      return dish.name === currentDishDetail
    })
    setCurrentDish(currDish);
    console.log(currentDish);
  }

  const menu = data.map((dish) => {
        return <FoodCard key={dish.id}
                         dish={dish} 
                         handleLikeClick={handleLikeClick}
                         handleImageDetail={handleImageDetail}/>
    })
  return (
    <div className='home'>
    {menu}
    <FoodDetail currentDish={currentDish} currentDishDetail={currentDishDetail}/>
    </div>
  )
}

export default Home