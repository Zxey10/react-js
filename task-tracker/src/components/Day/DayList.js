import React, { Fragment, useContext, useEffect, useState, useCallback } from 'react'
import Modal from '../Modal/Modal'
import { DayContext } from '../store/day-context'
import Day from './Day'
import styles from './DayList.module.css'
import DayForm from './DayForm'
import { useFetch } from '../hooks/use-fetch'

export default function DayList() {

  const [showOverlay,setShowOverlay] = useState(false)
  const [days,setDays] = useState([])
  const dayCtx = useContext(DayContext)

  const transformData = useCallback((data) => {

    let trasnformedData = []
    let i = 0;

    for(let key in data){
      for(let taskKey in data[key].tasks){
        console.log(taskKey)
      }
    }

    for(let key in data){
      i++;
      trasnformedData.push({
        complete: data[key].complete,
        date: data[key].date,
        dayNumber: data[key].dayNumber,
        id: data[key].id,
        tasks: data[key].tasks,
        index: i,
        firebaseKey: key,
        description: data[key].description
      })
    }
    setDays(trasnformedData)
    //dayCtx.getDays(trasnformedData)

    //console.log(dayCtx.days)

    console.log(trasnformedData)
  },[])

  const transformDataDel = useCallback((data) => {
    console.log(data);
  }, []);

  const {
    sendRequest: sendDeleteRequest,
  } = useFetch(transformDataDel);

  const {
    isLoading,
    sendRequest: sendGetRequest,
    error: hasError
  } = useFetch(transformData)

  useEffect(() => {
    const reqConfig = {
      url:'https://task-tracker-28e35-default-rtdb.europe-west1.firebasedatabase.app/days.json'
    }
    sendGetRequest(reqConfig)
  },[sendGetRequest])
  
  function showModal(){
    setShowOverlay(true)
  }

  function closeModal(){
    setShowOverlay(false)
  }

  function removeDay(dayVal){
    const filteredDays = days.filter(day => day.id !== dayVal.id)
    setDays(filteredDays)
  }

  function updateDays(newDay){
    if(newDay) setDays(prevDays => [...prevDays,newDay])
  }

  function removeTask(taskToRemove,index,dayKey,taskIndex){
    console.log(days[index-1])
    let daysRemovedTask = days[index-1].tasks.filter(task => taskToRemove.id !== task.id)
    let newDay = [...days];
    newDay[index-1].tasks = [...daysRemovedTask];
    console.log(newDay)
    setDays(newDay)
    


    //! Delete Req
    const reqConfig = {
      url: `https://task-tracker-28e35-default-rtdb.europe-west1.firebasedatabase.app/days/${dayKey}/tasks/${taskToRemove.index}/.json`,
      method: "DELETE",
    };
    sendDeleteRequest(reqConfig);

  }

  function updateTask(complete,taskIndex,dayIndex){
    let updatedDaysTaks = [...days];
    updatedDaysTaks[dayIndex - 1].tasks[taskIndex].complete = complete;
    setDays(updatedDaysTaks)
  }

  let content;
  if(days.length === 0){
    content = <p style={{color:"white",textAlign: "center",margin: "1rem"}}>Add a day</p>
  }else{
    content = days.map(day => (
      <Day updateTask={updateTask} removeTask={removeTask} removeDay={removeDay} key={day.id} day={day} />
    ))}
  
  if(hasError){
    return <p>{hasError}</p>
  }else if(isLoading){
    return <p>Loading ...</p>
  }else    
  return (
    <Fragment>
      {content}
      <div className={styles.addBtn}>
        <button onClick={showModal}>+</button>
        {showOverlay && 
          <Modal onClose={closeModal}>
              <DayForm updateDays={updateDays} dayIndex={days.length > 0 ? days[days.length-1].dayNumber : 0} onClose={closeModal}/>
          </Modal>}
      </div>
    </Fragment>
  )
}
