import React from 'react'
import FoodCard from './FoodCard'

function Home({data}) {
    const menu = data.map((dish) => {
        return <FoodCard key={dish.id}
                         dish={dish} />
    })
  return (
    <div>{menu}</div>
  )
}

export default Home