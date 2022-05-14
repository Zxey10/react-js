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
        },
        addExpense(state, action){
            state.expenses.push(action.payload.expense)
        }
    }
})

export const expenseActions = expensesSlice.actions;
export default expensesSlice;