import { createSlice } from "@reduxjs/toolkit";

const initialExpensesState = {
    items: []
}

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: initialExpensesState,
    reducers: {
        add(state){

        }
    }
})

export const expenseActions = expensesSlice.actions;
export default expensesSlice;