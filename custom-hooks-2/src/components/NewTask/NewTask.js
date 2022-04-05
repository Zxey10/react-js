import { useState, useCallback } from 'react';
import useHttp from '../../hooks/use-http';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const transformTask = (taskObj, taskText) => {
    const generatedId = taskObj.name;
    const createdTask = {id: generatedId, text: taskText.text}
    props.onAddTask(createdTask);
  }

  const { isLoading, error, sendRequest } = useHttp(transformTask)

  const enterTaskHandler = (taskText) => {
    const reqConfig = {
      url: 'https://react-test-242e7-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { text: taskText },
  
    }
    sendRequest(reqConfig)
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
