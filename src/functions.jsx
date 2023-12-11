import React from 'react'
import { imgArray } from './images/images'


export function getCars(carsArray) {
  const CarsEl = carsArray?.map((car) =>{ 
    const price = Math.floor(Math.random()*10 + 5) 
    // The API doesn't provide a price so I just created one. This gives us a random number.

    const model = car.model.replace(/\s/g, '_') 
    // Here I am replacing all white spaces with a "_" so it matches the image's path. Example: "Canyon_Crew"

    const imgSrc = imgArray.find(img => img == `/website-project/src/images/${model}.jpeg`)
    return (
    <div key={car.id} className='car-div'>
      <img src={imgSrc} className='car-img'/>
      <h3 className='car-title'>{car.model}</h3>
      <h4 className='car-price'>${price}0<span>/day</span></h4>
      <h4 className='car-make'>{car.make}</h4>
    </div>
  )})
  return CarsEl
}


