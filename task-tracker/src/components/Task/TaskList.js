import React, { useContext } from "react";
import { DayContext } from "../store/day-context";
import styles from "./TaskList.module.css";
import Task from "./Task";

export default function TaskList({ day }) {
  return (
    <div>
      {day.tasks.map((task) => {
        return <Task key={task.id} index={day.dayNumber-1} task={task} />;
      })}
    </div>
  );
}
