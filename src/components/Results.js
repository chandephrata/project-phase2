import React from 'react'

function Results({data}) {
  let likesArray = data.map((dish) => {
    return dish.likes;
  })
  
  return (
    <div>Results
      <h1>Gumbo: {likesArray[0]} </h1>
      <h1>Jambalaya: {likesArray[1]} </h1>
      <h1>Bacon and Shrimp Sliders: {likesArray[2]} </h1>
      <h1>Shrimp Stuffed Salmon: {likesArray[3]} </h1>
      <h1>Blackened Salmon with Rice & Peas: {likesArray[4]} </h1>
      <h1>Surf and Turf: {likesArray[5]} </h1>
    </div>
  )
}

export default Results