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

            let newExpenses = []
            
            for(let key in json){
                newExpenses.push({
                    date: json[key].date,
                    id: json[key].id,
                    items: json[key].items,
                    notes: json[key].notes,
                    title: json[key].title,
                    totalExpense: json[key].totalExpense,
                    key
                })
            }

            dispatch(expenseActions.getExpenses({
                expenses : newExpenses
            }));

        } catch (error) {
            console.log(error)
        }
    }
}

export const createNewExpense = (expense) => {
    return async(dispatch) => {
        const reqConfig = {
            url: 'https://expense-tracker-909a9-default-rtdb.europe-west1.firebasedatabase.app/Expenses.json',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expense)
        }
        try {
            const res = await fetch(reqConfig.url,{
                method: reqConfig.method,
                headers: reqConfig.headers,
                body: reqConfig.body
            });

            
            if(!res.ok) throw new Error('Post Req Failed')
            
            const json = await res.json()

            const newExpense = {
                ...expense,
                key: json.name
            }

            dispatch(expenseActions.addExpense({expense: newExpense}))


            console.log('ExpenseAdded')

        } catch (error) {
            console.log(error)
        }
    }
}
