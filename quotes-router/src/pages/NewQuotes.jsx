import React, { Fragment, useRef, useState, useEffect } from 'react'
import styles from './NewQuotes.module.scss'
import Prompt from '../components/Prompt'
import { useNavigate, useLocation } from 'react-router-dom'

export default function NewQuotes() {

  const authorRef = useRef('');
  const textRef = useRef('');  
  const [isEntering,setIsEntering] = useState(false)
  const [showPrompt,setShowPrompt] = useState(false)
  const navigate = useNavigate();
  const location = useLocation(); 
  
  useEffect(() => {
    if(location.pathname !== '/quotes/new'){
      setShowPrompt(true)
    }
  },[location])


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

  function focusHandler(){
    setIsEntering(true);
  }

  return (
    <Fragment>
      {showPrompt && <Prompt message={"Are you sure you want to exit?"} />}
      <div className={styles.newQuotes}>
      <form onFocus={focusHandler} onSubmit={addNewQuote} className={styles.form}>
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
    </Fragment>
  )
}
