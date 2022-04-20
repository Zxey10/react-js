import React from 'react'
import styles from './Card.module.css'


export default function Card(props) {

    const classes = `${styles.card} ${props.className || ''}`

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}
