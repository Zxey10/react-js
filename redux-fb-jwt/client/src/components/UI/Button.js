import React from 'react'
import styles from './Button.module.scss'


export default function Button(props) {
  
  let classes = `${props.className} ${styles.btn}`  
    
  return (
    <button type={props.type} onClick={props.onClick} className={classes}>
      {props.children}
    </button>
  )
}
