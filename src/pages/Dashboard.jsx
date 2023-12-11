import React from 'react'

function Dashboard() {
  return (
    <>
    <div className='dashboard-div'>
      <div className='dashboard-welcome'>
        <h2 className='dashboard-title'>Welcome!</h2>
        <p className='dashboard-p'>
          income last <span className='dashboard-span'>30 days</span>
        </p>
        <h1 className='dashboard-income'>$0</h1>
      </div>
      <div className='review-div'>
        <h4 className='review-title'> Review score <svg className='star' xmlns="http://www.w3.org/2000/svg" width="17"    height="19" viewBox="0 0 21 19" fill="none">
          <path d="M9.30123 0.843597C9.64795 -0.117224 11.0068 -0.117225 11.3535 0.843596L13.0595 5.57118C13.2156 6.0036 13.6259 6.2918 14.0856 6.2918H19.3421C20.4264 6.2918 20.8467 7.70205 19.9393 8.29562L15.8905 10.9443C15.4675 11.221 15.29 11.7521 15.4615 12.2275L17.0532 16.6383C17.4087 17.6236 16.3064 18.495 15.4298 17.9215L10.9246 14.9743C10.5618 14.737 10.0929 14.737 9.73015 14.9743L5.22489 17.9215C4.34834 18.495 3.24599 17.6236 3.60154 16.6383L5.19321 12.2275C5.36479 11.7521 5.18728 11.221 4.76429 10.9443L0.715395 8.29562C-0.191962 7.70205 0.228344 6.2918 1.31261 6.2918H6.56909C7.0288 6.2918 7.43919 6.0036 7.59523 5.57118L9.30123 0.843597Z" fill="#FF8C38"/>
          </svg>0.0<span className='review-span'>/5</span>
        </h4>
      </div>
        <div className='dashboard-cars'>
        <p>Add a car and earn some money</p>
        <button className='dashboard-btn'>Add</button>
      </div>
    </div>
    </>
  )
}

export default Dashboard