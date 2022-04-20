import React from 'react'
import Card from '../UI/Card'
import Task from '../Task/Task'
import { formatDate } from '../Helpers/dateFormat'
import styles from './Day.module.css'


export default function Day({ day }) {

    let content = day.tasks.map(task => (
        <Task  key={task.id} task={task} />
    ))

    let date = formatDate(day.date)

    return (
        <Card className={styles.day}>
            <div>
                <h1>Day {day.dayNumber}</h1>
                <h2>{date}</h2>
            </div>
            {content}
            <div className={day.complete ? styles.complete : styles.incomplete}>
                <label htmlFor="day">{day.complete ? 'COMPLETED' : 'UNCOMPLETED'}</label>
            </div>

        </Card>
    )
}
