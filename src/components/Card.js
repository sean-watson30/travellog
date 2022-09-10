import React from "react";

function Card({ item }) {
  return (
    <div>
      <h1>Card Component</h1>
      <h5>{ item.location }</h5>
      <h2>{ item.title }</h2>
      <a href={ item.googleMapsUrl }>View on Google Maps</a>
      <h5>{ item.startDate } - { item.endDate }</h5>
      <p>{ item.description }</p>
      <img src={ item.imageUrl } alt={ item.title }/>
    </div>
  )
}

export default Card