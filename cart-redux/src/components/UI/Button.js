import React from 'react'
import styles from './Button.module.scss'


export default function Button(props) {

    const classes = `${props.className} ${styles.btn}`

    return (
        <button type={props.type || 'button'} onClick={props.onClick} className={classes}>{props.children}</button>
    )
}
