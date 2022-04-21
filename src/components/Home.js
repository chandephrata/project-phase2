import React from 'react'
import FoodCard from './FoodCard'
import './Home.css'

function Home({data}) {
    const menu = data.map((dish) => {
        return <FoodCard key={dish.id}
                         dish={dish} />
    })
  return (
    <div className='home'>{menu}</div>
  )
}

export default Home