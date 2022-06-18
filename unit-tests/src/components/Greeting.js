import React, { useState } from 'react'
import Output from './Output'

export default function Greeting() {
  const [text,setText] = useState(false)

  function changeText(){
    setText(true)
  }  

  return (
    <div>
       <h1>HELLO !</h1> 
       <p>Good to see ya</p>
        {text && <Output>Changed</Output>}
        {!text && <Output>Not Changed</Output>}
       <button onClick={changeText}>Change State</button>
    </div>
  )
}
