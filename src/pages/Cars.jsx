import React from 'react'
import NotFound from '../components/NotFound'
import { getCars } from '../functions'

function Cars() {
    const [cars, setCars] = React.useState([])
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [displayedCars, setDisplayedCars] = React.useState([])

  React.useEffect(() => {
    setLoading(true)
    const url = 'https://car-data.p.rapidapi.com/cars?limit=10&page=0'
    const options = {
     	method: 'GET',
     	headers: {
     		'X-RapidAPI-Key': 'd4849df271msh90e94038f3f1fa9p155d9ejsn81c6874babd6',
     		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
     	}
    }
      fetch(url, options)
        .then(res => {
          if(res.ok){
            return res.json()
          }throw new Error('Something went wrong')
        })
        .then(data => {
          setCars(data) 
          setDisplayedCars(data)
        })
        .catch(() => {
          setError(true)
        })
        .finally(() => setLoading(false))
      }
  ,[])

  function change(value){
    if(value === 'Select a brand') {
      setDisplayedCars(cars)
    }else{
      setDisplayedCars(cars.filter(car => car.make === value))
    }

  }
  const CarsEl = getCars(displayedCars)

  if(error){
    return (
      <NotFound />
    )
  }
  if(loading){
    return (
      <div className='error-div'>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className='cars-big-div'>
    <h1>Expolore our options</h1>
    <select id='make-filter'onChange={(e) => change(e.target.value)}>
      <option>Select a brand</option>
      <option>Buick</option>
      <option>MINI</option>
      <option>Volvo</option>
      <option>Ford</option>
      <option>HUMMER</option>
      <option>GMC</option>
      <option>Subaru</option>
      <option>Mitsubishi</option>
    </select>
    <div className='cars-div'>
      {CarsEl? CarsEl : null}
    </div>
    </div>
  )
}


export default Cars