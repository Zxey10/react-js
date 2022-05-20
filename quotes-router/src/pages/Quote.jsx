import React ,{ useState, useRef } from 'react'
import styles from './Quote.module.scss'
import { useParams, Routes, Route, Link, Outlet } from 'react-router-dom'
import Comments from './Comments';

export default function Quote() {

  const [comments,setComments] = useState([]);
  const text = useRef()  
  const params = useParams()


  function addCommment(){
      if(text.current.value.trim().length <= 0) return 
      setComments(prev => [...prev,{id:Math.random(),text:text.current.value}])
  }

  return (
    <div className={styles.quote}>
        <div className={styles.card}>
            <h1>This Works {params.id}</h1>
        </div>

        <div className={styles.comments}>
            <h3>Comments</h3>
            <h6>Your Comment</h6>
            <textarea ref={text} name="comment" id="comment" cols="30" rows="10" />
            <button onClick={addCommment}>Add Comment</button>
        </div>
        
        <Link to={`/quotes/${params.id}/comments`}>To Comments</Link>
        <Link to={`/quotes/${params.id}/edit`}>To Edit</Link>
        <Outlet />
    </div>
  )
}
