import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialExpensesState = {
    expenses: [],
    reqStatus: null
}

export const getAllExpenses = createAsyncThunk(
    "/expenses/getAllExpenses",
    async (dispatch,getState) => {
        return await fetch('https://expense-tracker-909a9-default-rtdb.europe-west1.firebasedatabase.app/Expenses.json').then(res => res.json())
    }
)

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
    },
    extraReducers: {
        [getAllExpenses.pending]: (state,action) => {
            state.reqStatus = 'loading'
        },
        [getAllExpenses.fulfilled]: (state,action) => {
            state.reqStatus = 'success'
            console.log(action.payload)
            //state.expenses = action.payload
        },
        [getAllExpenses.rejected]: (state,action) => {
            state.reqStatus = 'failed'
        }
    }
})

export const expenseActions = expensesSlice.actions;
export default expensesSlice;