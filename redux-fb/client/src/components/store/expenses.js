import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

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
            return action.payload
        },
        addExpense(state, action){
            state.expenses.push(action.payload.expense)
        },
        addItem(state,action){

           const { item , expenseId, FBId } = action.payload;
           const newExpense = state.expenses.find(exp => exp.id === expenseId)
           item.FBId = FBId;
           const newItems = [...newExpense.items]
           newItems.push(item)
           
           if(newExpense){
                newExpense.items = newItems
           }

        },
        deleteExpense(state,action){
            const { expenseId } = action.payload;
            const index = state.expenses.findIndex(expense => expense.id === expenseId)
            //state.expenses.splice(index,1)     
            const exp = state.expenses.filter(exp => exp.id !== expenseId)
            return {
                ...state,
                expenses: exp
            }     
        },
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