import React from 'react'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='footer-div'>
      <p className='footer-title'>✉️ Marianaurcuquig@gmail.com</p>
    </div>
  )
}

export default Footer