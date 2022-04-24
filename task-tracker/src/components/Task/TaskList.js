import React, { useContext } from "react";
import { DayContext } from "../store/day-context";
import styles from "./TaskList.module.css";
import Task from "./Task";

export default function TaskList({ day }) {
  return (
    <div>
      {day.tasks.map((task,i) => {
        return <Task day={day} dayKey={day.firebaseKey} key={task.id} index={i} task={task} />;
      })}
    </div>
  );
}
