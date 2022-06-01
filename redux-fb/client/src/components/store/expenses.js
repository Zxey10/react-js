import { createSlice, current } from "@reduxjs/toolkit";

const initialExpensesState = {
    expenses: []
}

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: initialExpensesState,
    reducers: {
        getExpenses(state, action){
            state.expenses.concat(action.payload.expenses)
        },
        addExpense(state, action){
            state.expenses.push(action.payload.expense)
        },
        addItem(state,action){
           const expense = state.expenses.find(expense => expense.id === action.payload.expenseId)

           expense.items.push(action.payload.item)
        },
        deleteExpense(state,action){
            const { expenseId } = action.payload;
            const index = state.expenses.findIndex(expense => expense.id === expenseId)
            //state.expenses.splice(index,1)     
            state.expenses =  state.expenses.filter(exp => exp.id !== expenseId)          
        }
    }
})

export const expenseActions = expensesSlice.actions;
export default expensesSlice;