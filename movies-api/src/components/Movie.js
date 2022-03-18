import React from 'react'
import styles from './Movie.module.css'

export default function Movie({movie}) {

  let summary = movie.summary.substring(3,40);
    
  return (
    <div className={styles.card}>
        <img src={movie.img}/>
        <h2>{movie.name}</h2>
        {summary}
        <p>{movie.rating}</p>
    </div>
  )
}
