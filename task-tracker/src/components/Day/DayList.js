import React, { Fragment, useContext, useState } from 'react'
import Modal from '../Modal/Modal'
import { DayContext } from '../store/day-context'
import Day from './Day'
import styles from './DayList.module.css'
import DayForm from './DayForm'

export default function DayList() {

  const [showOverlay,setShowOverlay] = useState(false)

  const dayCtx = useContext(DayContext);


  function showModal(){
    setShowOverlay(true)
  }

  function closeModal(){
    setShowOverlay(false)
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
        <button onClick={showModal}>+</button>
        {showOverlay && 
          <Modal onClose={closeModal}>
              <DayForm />
          </Modal>}
      </div>
    </Fragment>
  )
}
