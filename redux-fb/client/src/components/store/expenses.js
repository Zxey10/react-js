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
        },
        addItem(state,action){
           const expense = state.expenses.find(expense => expense.id === action.payload.expenseId)
           expense.items.push(action.payload.item)
        }
    }
})

export const expenseActions = expensesSlice.actions;
export default expensesSlice;