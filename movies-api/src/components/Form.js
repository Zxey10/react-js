import React, {useRef} from 'react'
import styles from './Form.module.css'

export default function Form(props) {
 
  let inputRef = useRef();   

  function searchHandler(){
    props.onSearch(inputRef.current.value)
    inputRef.current.value = null;
  }

  function clearLocalStorage(){
    props.onClearMovies()
  }

  return (
    <div className={styles.form}>
        <input ref={inputRef} type='text' ></input>
        <button onClick={searchHandler}>Get Movies</button>
        <button onClick={clearLocalStorage}>Clear Movies</button>
    </div>
  )
}
