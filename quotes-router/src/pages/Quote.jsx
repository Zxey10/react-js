import React ,{ useState, useRef } from 'react'
import styles from './Quote.module.scss'
import { useParams, Routes, Route, Link, Outlet ,useMatch } from 'react-router-dom'
import Comments from './Comments';

export default function Quote() {

  const [comments,setComments] = useState([]);
  const [text,setText] = useState(); 
  const params = useParams();
  const matchUrl = useMatch('/quotes/:id');

  console.log(matchUrl)

  function addCommment(){
      if(text.trim().length <= 0) return 
      setComments(prev => [...prev,{id:Math.random(),text:text}])
      setText('')
    }

  return (
    <div className={styles.quote}>
        <div className={styles.card}>
            <h1>This Works {params.id}</h1>
        </div>

        <div className={styles.comments}>
            <h3>Comments</h3>
            <h6>Your Comment</h6>
            <textarea value={text} name="comment" id="comment" cols="30" rows="10" onChange={(e) => setText(e.target.value)} />
            <button onClick={addCommment}>Add Comment</button>
        </div>
        
        <Link to={`${matchUrl.pathname}/comments`} state={{comments}}>To Comments</Link>
        <Link to={`${matchUrl.pathname}/edit`}>To Edit</Link>
        <Outlet />
    </div>
  )
}
