import React, { useState } from 'react'
import Card from '../UI/Card'
import styles from './Task.module.css'


export default function Task({task}) {

  function taskChangedHandler(e){
      console.log('Input Changed');
  }

  return (
      <Card className={styles.task}>
        <label htmlFor='task'>{task.name}</label>
        <input checked={task.complete} type="checkbox" id='task' name='task' onChange={taskChangedHandler}/>
      </Card>
  )
}
