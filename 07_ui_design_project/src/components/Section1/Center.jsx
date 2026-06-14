import React from 'react'

const Center = ({ number, image, title }) => {

  const handleClick = () => {
    alert(`${title} button clicked!`)
  }

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="circle">{number}</div>

      <div className="card-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iure accusamus cupiditate voluptatibus mollitia alias
          tempora.
        </p>

        <button onClick={handleClick}>
          {title}
        </button>
      </div>
    </div>
  )
}

export default Center