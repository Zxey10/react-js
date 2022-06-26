import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import authSlice from './auth'
import expensesSlice from './expenses'

const store = configureStore({
    reducer: {auth : authSlice.reducer, expenses: expensesSlice.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store