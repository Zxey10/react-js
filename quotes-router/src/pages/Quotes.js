import React, { useEffect, useState } from 'react'
import styles from './Quotes.module.scss'
import Card from '../UI/Card'
import { useLocation } from 'react-router-dom'

export default function Quotes() {
  const [quotes,setQuotes] = useState([]);

  const  data = useLocation();

  useEffect(() => {
    console.log(quotes);
  },[quotes])

  useEffect(() => {
    if(data.state === null) return
    setQuotes(prev => [...prev,{...data.state}])
  },[data])

  return (
    <div className={styles.quotes}>
      <div className={styles.quotesList}>
      <button>Sort Ascending</button> 
        {quotes.length === 0 && <p style={{color:'white'}}>No Quotes</p>} 
        {quotes.map(quote => {
            return <Card key={Math.random()} quote={quote}/>
        })}
      </div>
    </div>
  )
}
