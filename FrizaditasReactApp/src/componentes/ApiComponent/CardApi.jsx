import React from 'react'

const CardApi = ({digimon}) => {
  const { name,id, image } = digimon
  return (
    <div>
      <p>{digimon.name}</p>
      <img src={image} alt="" />
    </div>
  )
}

export default CardApi