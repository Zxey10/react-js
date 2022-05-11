import { createSlice } from "@reduxjs/toolkit";

const initialExpensesState = {
    expenses: []
}

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: initialExpensesState,
    reducers: {
        getExpenses(state, action){
            state.expenses = action.payload.expenses
        }
    }
})

export const expenseActions = expensesSlice.actions;
export default expensesSlice;