import React, { useEffect, useState } from 'react'
import styles from './Quotes.module.scss'
import Card from '../UI/Card'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

export default function Quotes() {
  const [quotes,setQuotes] = useState([
    {id:1,text: "Random 1",author: " Alex"},
    {id:2,text: "Random 2",author: " Jake"}
  ]);

  const navigate = useNavigate()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)

  const isSortingAscending = queryParams.get('sort') === 'asc'

  const sortedQuotes = sortQuotes(quotes,isSortingAscending)

  function changeSortingHandler(){
    navigate('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'),{replace:true})
  }

  return (
    <div className={styles.quotes}>
      <div className={styles.quotesList}>
      <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button> 
        {quotes.length === 0 && <p style={{color:'white'}}>No Quotes</p>} 
        {sortedQuotes.map(quote => {
            return <Card key={Math.random()} quote={quote}/>
        })}
      </div>
    </div>
  )
}
