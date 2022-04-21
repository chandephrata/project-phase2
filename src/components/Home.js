import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodDetail from './FoodDetail'
import './Home.css'

function Home({data, handleLikeClick}) {
  const [currentDish, setCurrentDish] = useState({});

  function handleImageDetail(name){
    let currDish = data.find((dish) => {
      return dish.name === name
    })
    setCurrentDish(currDish);
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
    <FoodDetail currentDish={currentDish} />
    </div>
  )
}

export default Home