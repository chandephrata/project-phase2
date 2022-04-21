import React from 'react'

function Results({gumboLikes, jambaLikes, baconShrimpLikes, shrimpSalmonLikes, blackSalmonLikes, surfTurfLikes}) {
  // display likes of each and choose winner
  return (
    <div>Results
      <h1>Gumbo: {gumboLikes} </h1>
      <h1>Jambalaya: {jambaLikes} </h1>
      <h1>Bacon and Shrimp Sliders: {baconShrimpLikes} </h1>
      <h1>Shrimp Stuffed Salmon: {shrimpSalmonLikes} </h1>
      <h1>Blackened Salmon with Rice & Peas: {blackSalmonLikes} </h1>
      <h1>Surf and Turf: {surfTurfLikes} </h1>
    </div>
  )
}

export default Results