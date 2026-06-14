import React from 'react'
import Center from './Center'

const ImageContainer = () => {
  return (
    <div className="image-container">
      <Center
        number="1"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
        title="Satisfied"
      />

      <Center
        number="2"
        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500"
        title="Underserved"
      />
    </div>
  )
}

export default ImageContainer