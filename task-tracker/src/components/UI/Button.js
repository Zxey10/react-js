import React from 'react'
import styles from './Button.module.css';

export default function Button(props) {

  const classes = `${styles.button} ${props.className || ''}`  

  return (
    <button disabled={props.disabled} type={props.type || 'button'} onClick={props.onClick} className={classes}>{props.children}</button>
  )
}
