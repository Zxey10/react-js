import React from 'react'
import Card from '../UI/Card'
import { formatDate } from '../Helpers/dateFormat'
import styles from './Day.module.css'
import TaskList from '../Task/TaskList'
import Button from '../UI/Button'
import { InfoCircle, Pencil, XCircle } from 'react-bootstrap-icons'


export default function Day({ day, removeDay }) {

    let isDayComplete = day.tasks.every(task => task.complete)

    let date = formatDate(day.date)

    function showDayInfo(){
        
    }

    function editDay(){
        
    }

    function deleteDay(){
        removeDay(day)
    }

    return (
        <Card className={styles.day}>
            <div>
                <h1>Day {day.dayNumber}</h1>
                <h2>{date}</h2>
                <Button className={styles.defaultBtn} onClick={showDayInfo}><InfoCircle /> Info</Button>
                <Button className={styles.editBtn} onClick={editDay}><Pencil /> Edit</Button>
                <Button className={styles.deleteBtn} onClick={deleteDay}><XCircle /> Delete</Button>
            </div>
            <TaskList day={day}/>
            <div className={isDayComplete ? styles.complete : styles.incomplete}>
                <label htmlFor="day">{isDayComplete ? 'COMPLETED' : 'UNCOMPLETED'}</label>
            </div>
        </Card>
    )
}
