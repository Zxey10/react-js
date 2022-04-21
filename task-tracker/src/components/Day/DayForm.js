import React, { useContext, useState, useRef } from "react";
import styles from "./DayForm.module.css";
import Button from "../UI/Button";
import { DayContext } from "../store/day-context";
import TaskList from "../Task/TaskList";

export default function DayForm(props) {

  const [tasks,setTasks] = useState([])

  const dayCtx = useContext(DayContext);
  const [dayNumber, setDayNumber] = useState(1);
  const [taskValue, setTaskValue] = useState('')


  //! Render Tasks on Form
  //! ADD MORE TASKS

  function addNewDay(e) {

    e.preventDefault()

    let newDay = {
      id: Math.random(),
      dayNumber: dayNumber,
      date: Date.now(),
      tasks: [...tasks],
      complete: false,
    };
    dayCtx.addNewDay(newDay);
    props.onClose()
    setDayNumber(prevDay => prevDay + 1);
    //! Add To Firebase
  }

  function taskValueChangeHandler(e){
    setTaskValue(e.target.value)
  }

  function addNewTaskToDay(){
    if(taskValue.trim().length > 0){
      setTasks(prevTasks => [...prevTasks,{id:Math.random(), name:taskValue, complete:false}])
    }else{
      console.log("Input Invalid")
    }
    setTaskValue('')
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
            <input value={taskValue} type="text" name="task" id="task" onChange={taskValueChangeHandler}/>
            <Button className={styles.btn} onClick={addNewTaskToDay}>Add Task</Button>
            <ul className={styles.ul}>
              {tasks.map(task => (
                <li key={task.id}>{task.name}</li>
              ))}
            </ul>
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
        <div>
          <Button disabled={tasks.length === 0} type="submit">Add New Day</Button>
          <Button type="button" onClick={props.onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
