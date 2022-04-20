import React from 'react'
import styles from './Button.module.css';

export default function Button(props) {

  const classes = `${styles.button} ${props.className || ''}`  

  return (
    <button type={props.type || 'button'} className={classes}>{props.children}</button>
  )
}
