import React from "react";

function Card({ item }) {
  return (
    <div className="col-4">
      <div className="card">
        <img className="card-img-top" src={ item.imageUrl } alt={ item.title }/>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">{ item.location }</h6>
          <h2 className="card-title">{ item.title }</h2>
          <a href={ item.googleMapsUrl }>View on Google Maps</a>
          <h5>{ item.startDate } - { item.endDate }</h5>
          <p className="card-text">{ item.description }</p>
        </div>
      </div>
    </div>
  )
}

export default Card