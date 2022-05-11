import { expenseActions } from "./expenses";

export const fetchExpenses = () => {
    return async(dispatch) => {
        try {
            const reqConfig = {
                url: 'https://expense-tracker-909a9-default-rtdb.europe-west1.firebasedatabase.app/Expenses.json',
            }
            const res = await fetch(reqConfig.url);
            
            if(!res.ok) throw new Error('Get Req Failed')
    
            const json = await res.json();

            console.log(json)

            dispatch(expenseActions.getExpenses({
                expenses : json
            }));

        } catch (error) {
            console.log(error)
        }
    }
}