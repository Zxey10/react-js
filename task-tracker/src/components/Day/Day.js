import React from 'react'
import Card from '../UI/Card'
import Task from '../Task/Task'
import { formatDate } from '../Helpers/dateFormat'
import styles from './Day.module.css'
import TaskList from '../Task/TaskList'


export default function Day({ day }) {

    let isDayComplete = day.tasks.every(task => task.complete)

    let date = formatDate(day.date)

    return (
        <Card className={styles.day}>
            <div>
                <h1>Day {day.dayNumber}</h1>
                <h2>{date}</h2>
            </div>
            <TaskList day={day}/>
            <div className={isDayComplete ? styles.complete : styles.incomplete}>
                <label htmlFor="day">{isDayComplete ? 'COMPLETED' : 'UNCOMPLETED'}</label>
            </div>

        </Card>
    )
}
