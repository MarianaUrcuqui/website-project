import React from 'react'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='footer-div'>
      <p className='footer-title'>Ⓒ {year} #CARLIFE</p>
    </div>
  )
}

export default Footer