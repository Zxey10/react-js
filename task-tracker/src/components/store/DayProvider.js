import React, {useReducer} from 'react'
import { DayContext } from './day-context'

const defaultState = {
    days: []
}

const ACTIONS = {
    ADD: 'ADD_DAY',
    UPDATE_TASK: 'UPDATE_TASK'
}

const dayReducer = (state,action) => {
    switch(action.type){
        case ACTIONS.ADD:
        let updatedDays = [...state.days];
        updatedDays.push(action.task)
        return {
            days: updatedDays
        }

        case ACTIONS.UPDATE_TASK:
            let updatedDaysTaks = []
            // console.log(updatedDaysTaks[action.index])
            let index = state.days[action.index].tasks.findIndex(task => {
                return task.id === action.id
            })
            if(index !== -1){
                updatedDaysTaks = [...state.days]
                updatedDaysTaks[action.index].tasks[index].complete = !action.complete
            }
            return{
                days: updatedDaysTaks
            }
        
        default:
            return defaultState;    
    }
}

export default function DayProvider(props) {

    const [dayState,dispatchDays] = useReducer(dayReducer,defaultState)
    
    const addTaskHandler = (task) => {
        dispatchDays({
            type: ACTIONS.ADD,
            task: task
        })
    }

    const updateTask = (id,index,complete) => {
        dispatchDays({
            type: ACTIONS.UPDATE_TASK,
            id: id,
            index,
            complete
        })
    }

    const dayContext = {
        days: dayState.days,
        addNewDay: addTaskHandler,
        updateTask: updateTask
    }

    return (
        <DayContext.Provider value={dayContext}>
            {props.children}
        </DayContext.Provider>
    )
}
