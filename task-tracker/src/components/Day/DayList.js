import React, { Fragment, useContext } from 'react'
import { DayContext } from '../store/day-context'
import Day from './Day'
import styles from './DayList.module.css'

export default function DayList() {


  const dayCtx = useContext(DayContext);

  function addNewDay() {
    let newDay = {
      id: Math.random(),
      dayNumber: 1,
      date: Date.now(),
      tasks: [
        { id: Math.random(), name: 't1', complete: false },
        { id: Math.random(), name: 't2', complete: false }
      ],
      complete: false
    }
    dayCtx.addNewDay(newDay);
  }

  let content;
  if(dayCtx.days.length === 0){
    content = <p style={{color:"white",textAlign: "center",marginBottom: "1rem"}}>Add a day</p>
  }else{
    content = dayCtx.days.map(day => (
      <Day key={day.id} day={day} />
    ))}
  

  return (
    <Fragment>
      {content}
      <div className={styles.addBtn}>
        <button onClick={addNewDay}>+</button>
      </div>
    </Fragment>
  )
}
