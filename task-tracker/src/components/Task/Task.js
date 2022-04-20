import React, { useContext } from 'react'
import Card from '../UI/Card'
import styles from './Task.module.css'
import { DayContext } from '../store/day-context'


export default function Task({task,index}) {

  const dayCtx = useContext(DayContext)

  function taskChangedHandler(){
    dayCtx.updateTask(task.id,index,task.complete)
  }

  return (
      <Card className={styles.task}>
        <label htmlFor='task'>{task.name}</label>
        <input checked={task.complete} type="checkbox" id='task' name='task' onChange={taskChangedHandler}/>
      </Card>
  )
}
