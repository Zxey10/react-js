import React, { useContext, Fragment } from "react";
import { DayContext } from "../store/day-context";
import styles from "./TaskList.module.css";
import Task from "./Task";
import { XCircle } from "react-bootstrap-icons";

export default function TaskList({ day, showEdit, removeTask, checkTask }) {
  
  function deleteTasks(index){
    removeTask(day.tasks[index],day.index,day.firebaseKey,day.tasks[index].index)
  }

  function updateTasks(isComplete,index,dayIndex){
    checkTask(isComplete,index,dayIndex)
  }

  return (
    <div>
      {day.tasks.map((task,i) => {
        return (
          <div key={Math.random()} className={styles.taskList}>
            {showEdit && <XCircle className={styles.icon} onClick={deleteTasks.bind(null,i)} color="red"/>}
            <Task day={day} dayKey={day.firebaseKey} key={task.id} task={task} updateTasks={updateTasks}/>
          </div>
        )
      })}
    </div>
  );
}
