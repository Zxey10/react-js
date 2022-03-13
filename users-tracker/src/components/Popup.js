import React from 'react'
import Card from './Card'
import './Popup.css'

export default function Popup() {
  return (
    <Card>
      <div>
          <h2>Invalid Input</h2>
      </div>
      <p>Insert a value greater than 0</p>
      <button>Okay</button>
    </Card>
  )
}
