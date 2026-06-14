import React from 'react'

function Card(props) {
  return (
    <div className="Card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>View Details</button>
    </div>
  )
}

export default Card
