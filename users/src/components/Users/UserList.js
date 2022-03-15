import React from 'react'
import styles from './UserList.module.css'
import Card from '../UI/Card'

export default function UserList(props) {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
}
