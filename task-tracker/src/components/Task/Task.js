import React, { Fragment, useCallback, useContext } from "react";
import Card from "../UI/Card";
import styles from "./Task.module.css";
import { DayContext } from "../store/day-context";
import { useFetch } from "../hooks/use-fetch";

export default function Task({ task, dayKey, index, day, updateTasks }) {

  const transformData = useCallback((data) => {
    console.log(data)
  },[])

  const dayCtx = useContext(DayContext)

  const { isLoading,sendRequest: sendPatchReq, error: hasError } = useFetch(transformData);

  function taskChangedHandler() {

    const reqConfig = {
      url: `https://task-tracker-28e35-default-rtdb.europe-west1.firebasedatabase.app/days/${dayKey}/tasks/${index}/.json`,
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {complete: !task.complete}
    }
    sendPatchReq(reqConfig)

    updateTasks(reqConfig.body.complete,index,day.index)

  }

  return (
    <Card className={styles.task}>
      <input
        className={styles.input}
        checked={task.complete}
        type="checkbox"
        id="task"
        name="task"
        onChange={taskChangedHandler}
      />
      <label htmlFor="task">{task.name}</label>
    </Card>
  );
}
