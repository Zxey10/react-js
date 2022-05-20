import React from 'react'
import styles from './Prompt.module.scss'

export default function Prompt({message}) {

  function cancel(){
    
  }  

  function changePage(){

  }

  return (
    <div className={styles.prompt}>
      <p>{message}</p>
      <button onClick={cancel}>Cancel</button>
      <button onClick={changePage}>Yes</button>
    </div>
  )
}
