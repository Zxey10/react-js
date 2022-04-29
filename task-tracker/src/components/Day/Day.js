import React, { useCallback, useState, useRef } from "react";
import Card from "../UI/Card";
import { formatDate } from "../Helpers/dateFormat";
import styles from "./Day.module.css";
import TaskList from "../Task/TaskList";
import Button from "../UI/Button";
import { InfoCircle, Pencil, XCircle } from "react-bootstrap-icons";
import { useFetch } from "../hooks/use-fetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom";
import DayEditForm from "./DayEditForm";

export default function Day({ day, removeDay, removeTask, updateTask }) {

  const [showInfo,setShowInfo] = useState(false)
  const [showEdit,setShowEdit] = useState(false)  
  const [dateValue,setDateValue] = useState('')  

  const notify = () => {
    //toast("Default Message");

    toast.success("Day Deleted!", {
      icon: "🌞",
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      progress: undefined,
    });
  };

  const transformData = useCallback((data) => {
    console.log("Day Deleted");
  }, []);

  const {
    isLoading,
    error: hasError,
    sendRequest: sendDeleteRequest,
  } = useFetch(transformData);

  const transformDataDate = useCallback((data) => {
    console.log("Date Changed");
  }, []);

  const {
    sendRequest: sendPatchRequest,
  } = useFetch(transformDataDate);

  let isDayComplete = day.tasks.every((task) => task.complete);

  let date = formatDate(day.date);

  function showDayInfo() {
    setShowInfo(prev => !prev)
  }

  function editDay() {
    setShowEdit(prev => !prev)

  }

  function deleteDay() {
    const reqConfig = {
      url: `https://task-tracker-28e35-default-rtdb.europe-west1.firebasedatabase.app/days/${day.firebaseKey}/.json`,
      method: "DELETE",
    };
    sendDeleteRequest(reqConfig);
    removeDay(day);
    notify();
  }

  function dateChangeHandler(e){
    setDateValue(e.target.value)
  }

  function cancelEdit(){
    setDateValue('')
    setShowEdit(false)
  }

  function deleteTask(task,index,dayKey,taskIndex){
    removeTask(task,index,dayKey,taskIndex)
  }

  function checkTask(complete,index,dayIndex){
    updateTask(complete,index,dayIndex)
  }

  function changeDate(){
    const reqConfig = {
      url: `https://task-tracker-28e35-default-rtdb.europe-west1.firebasedatabase.app/days/${day.firebaseKey}/.json`,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {date: dateValue}
    }
    if(dateValue !== ''){
      sendPatchRequest(reqConfig)
    }else{
      console.log("No Changes")
    }

    setShowEdit(false)
  }

  let formatedDate = formatDate(dateValue);

  return (
    <Card className={styles.day}>
      <div>
        <h1>Day {day.dayNumber}</h1>
        <h2>{dateValue !== '' ? formatedDate : date  }</h2>
        <Button className={styles.defaultBtn} onClick={showDayInfo}>
          <InfoCircle /> Info
        </Button>
        <Button className={styles.editBtn} onClick={editDay}>
          <Pencil />  Edit
        </Button>
        {ReactDOM.createPortal(
          <ToastContainer
            position="bottom-center"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />,
          document.getElementById("root")
        )}
        <Button className={styles.deleteBtn} onClick={deleteDay}>
          <XCircle /> Delete
        </Button>
       <div className={styles.info}>
        {showInfo && <p>{day.description}</p>}
       </div>
       {showEdit && <input value={dateValue} type="date" onChange={dateChangeHandler} />}
      </div>
      <TaskList checkTask={checkTask} removeTask={deleteTask} showEdit={showEdit} day={day} />
      <div className={isDayComplete ? styles.complete : styles.incomplete}>
        <label htmlFor="day">
          {isDayComplete ? "COMPLETED" : "UNCOMPLETED"}
        </label>
      </div>
      {/* {showEdit && <DayEditForm />} */}
      {showEdit && <Button onClick={cancelEdit} className={styles.cancel}>Cancel</Button>}
      {showEdit && <Button onClick={changeDate} className={styles.save}><Pencil /> Save</Button>}
    </Card>
  );
}
