import React ,{ useState, useRef } from 'react'
import styles from './Quote.module.scss'
import { useParams } from 'react-router-dom'
import { QUOTES } from '../data/quotes';

export default function Quote() {

  const [comments,setComments] = useState([]);
  const text = useRef()  
  const params = useParams()

  console.log(QUOTES[params.id - 1]) 

  function addCommment(){
      if(text.current.value.trim().length <= 0) return 
      setComments(prev => [...prev,{id:Math.random(),text:text.current.value}])
  }

  return (
    <div className={styles.quote}>
        <div className={styles.card}>
            <h1>This Works {params.id}</h1>
            {/* <p>{QUOTES[params.id - 1].author}</p> */}
        </div>

        <div className={styles.comments}>
            <h3>Comments</h3>
            <h6>Your Comment</h6>
            <textarea ref={text} name="comment" id="comment" cols="30" rows="10" />
            <button onClick={addCommment}>Add Comment</button>
        </div>

        <div>
            <ul>
                {comments.map(comm => (
                    <li key={comm.id}>{comm.text}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}
