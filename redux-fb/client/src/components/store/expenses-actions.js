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
            let newItems = []
            
            for(let key in json){
                for(let key1 in json[key].items){
                    newItems.push({
                        id: json[key].items[key1].id,
                        price: json[key].items[key1].price,
                        text: json[key].items[key1].text
                    })
                }
                newExpenses.push({
                    date: json[key].date,
                    id: json[key].id,
                    notes: json[key].notes,
                    title: json[key].title,
                    items: newItems,
                    totalExpense: json[key].totalExpense,
                    key
                })
                newItems = []
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

export const addNewItem = (item, expenseFBId, expenseId) => {
    return async(dispatch) => {
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

            const json = await res.json();
            console.log(json)

            dispatch(expenseActions.addItem({item, expenseId}))


        } catch (error) {
            console.log(error.message)
        }
    }
}

export const deleteExpenseById = (expenseId) => {
    return async(dispatch) => {
        const reqConfig = {
            url: `https://expense-tracker-909a9-default-rtdb.europe-west1.firebasedatabase.app/Expenses/${expenseId}/.json`,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }
            try {
                const res = await fetch(reqConfig.url,{
                    method: reqConfig.method,
                    headers: reqConfig.headers,
                    body: reqConfig.body
                });
    
                if(!res.ok) throw new Error('Failed to add item')

               
                dispatch(expenseActions.deleteExpense({expenseId}))
                dispatch(fetchExpenses())
               
    
            } catch (error) {
                console.log(error.message)
            }
    }
}
