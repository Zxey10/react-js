import React from 'react'
import Card from './Card'
import './Popup.css'

export default function Popup({closePopup,className,errorText}) {

  const classes = `popup ${className}`


  function dismisPopup(){
    closePopup()
  }

  return (
    <div className={classes} onClick={dismisPopup}>
      <div className='overlay'>
        <div className='popup'>
        <Card>
          <div className='modal'>
            <h2>Invalid Input</h2>
          </div>
          <p>{errorText}</p>
          <button>Okay</button>
        </Card>
        </div>
      </div>

    </div>
  )
}
