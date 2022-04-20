import React, {useReducer} from 'react'
import { DayContext } from './day-context'

const defaultState = {
    days: []
}

const ACTIONS = {
    ADD: 'ADD_DAY'
}

const dayReducer = (state,action) => {
    switch(action.type){
        case ACTIONS.ADD:
        let updatedDays = [...state.days];
        updatedDays.push(action.task)
        return {
            days: updatedDays
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

    const dayContext = {
        days: dayState.days,
        addNewDay: addTaskHandler
    }

    return (
        <DayContext.Provider value={dayContext}>
            {props.children}
        </DayContext.Provider>
    )
}
