import React, { useContext, useState } from "react";
import styles from "./DayForm.module.css";
import Button from "../UI/Button";
import { DayContext } from "../store/day-context";
import TaskList from "../Task/TaskList";

export default function DayForm(props) {

  const dayCtx = useContext(DayContext);
  const [dayNumber,setDayNumber] = useState(1);  

  //! Render Tasks on Form
  //! ADD MORE TASKS

  function addNewDay() {
    let newDay = {
      id: Math.random(),
      dayNumber: dayNumber,
      date: Date.now(),
      tasks: [
        { id: Math.random(), name: 't1', complete: false },
        { id: Math.random(), name: 't2', complete: false },
        { id: Math.random(), name: 't3', complete: false },
        { id: Math.random(), name: 't4', complete: false },
        { id: Math.random(), name: 't5', complete: false }
      ],
      complete: false
    }
    dayCtx.addNewDay(newDay);
    setDayNumber(prevDay => prevDay + 1);
    //! Add To Firebase
  }

  return (
    <div>
      <h2>Add New Day</h2>
      <form className={styles.form} onSubmit={addNewDay}>
        <div className={styles.date}>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className={styles.date}>
          <label htmlFor="task">Task</label>
          <div className={styles.task}>
            <input type="text" name="task" id="task" />
            <Button className={styles.btn}>Add Task</Button>
          </div>
        </div>
        <div className={styles.description}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Enter something here ..."
          ></textarea>
        </div>
        <Button type="submit">Add New Day</Button>
      </form>
    </div>
  );
}
