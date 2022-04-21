import React from 'react'
import FoodCard from './FoodCard'
import FoodDetail from './FoodDetail'
import './Home.css'

function Home({data, handleLikeClick}) {
    const menu = data.map((dish) => {
        return <FoodCard key={dish.id}
                         dish={dish} 
                         handleLikeClick={handleLikeClick}/>
    })
  return (
    <div className='home'>
    {menu}
    <FoodDetail />
    </div>
  )
}

export default Home