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

export const addItem2 = createAsyncThunk(
    '/expenses/addItem2',
    async({expenseFBId,item,expenseId},dispatch) => {
        const reqConfig = {
            url: `https://expense-tracker-909a9-default-rtdb.europe-west1.firebasedatabase.app/Expenses/${expenseFBId}/items/.json`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }
        try {
            const res = await fetch(reqConfig.url,{
                method: reqConfig.method,
                headers: reqConfig.headers,
                body: reqConfig.body
            });

            
            if(!res.ok) throw new Error('Failed to add item')

            dispatch(expenseActions.addItem({item,expenseId}))

        } catch (error) {
            console.log(error.message)
        }
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

           const { item , expenseId } = action.payload;
           const newExpense = state.expenses.find(exp => exp.id === expenseId)
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