import React, { useRef, useState } from 'react'
import { formatDate } from '../Helpers/dateFormat'
import styles from './DayEditForm.module.css'


export default function DayEditForm({day}) {

  const [dateValue,setDataValue] = useState('')  

  const editDay = (e) => {
      e.preventDefault();
      const editedDay = {
          date:dateValue.current.value,

      }  
  }

  function dateChangeHandler(e){
      setDataValue(e.target.value)
  }

  let formatedDate = formatDate(dateValue);


  return (
    <div>
        <h2>Edit Day</h2>
        <form onSubmit={editDay}>
            <div>
                <label htmlFor="date">Date</label>
                <input value={dateValue} type="text" name="date" id="date" onChange={dateChangeHandler}/>
            </div>
        </form>    
    </div>
  )
}
