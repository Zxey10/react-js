import { configureStore } from '@reduxjs/toolkit'

import authSlice from './auth'
import expensesSlice from './expenses'

const store = configureStore({
    reducer: {auth : authSlice.reducer, expenses: expensesSlice.reducer}
})

export default store