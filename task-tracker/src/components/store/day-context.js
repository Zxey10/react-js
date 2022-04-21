import React from "react";

export const DayContext = React.createContext({
    days: [],
    addNewDay: (day) => {},
    updateTask: (task,index,complete) => {},
    dayCounter: 1
})