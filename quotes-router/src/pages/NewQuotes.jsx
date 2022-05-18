import React, { useRef } from 'react'
import styles from './NewQuotes.module.scss'
import { useNavigate } from 'react-router-dom'

export default function NewQuotes() {

  const authorRef = useRef('');
  const textRef = useRef('');  
  
  const navigate = useNavigate();  

  function addNewQuote(e){
      e.preventDefault();

      if(authorRef.current.value.trim().length <= 0) return;
      if(textRef.current.value.trim().length <= 0) return;

      
      let quote = {
          id: Math.random(),
          author: authorRef.current.value,
          title: textRef.current.value
      }
      
      //SEND TO QUOTES

      navigate('/quotes',{state: quote});  
  }  

  return (
    <div className={styles.newQuotes}>
      <form onSubmit={addNewQuote} className={styles.form}>
          <div className={styles.author}>
              <label htmlFor="author">Author</label>
              <input ref={authorRef} type="text" id='author'/>
          </div>
          <div className={styles.text}>
              <label htmlFor="text">Text</label>
              <textarea ref={textRef} type="text" id='text' rows={10}/>
          </div>
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
