import React, { useState } from "react";

const AuthContext = React.createContext({})

export const AuthContextProvider = (props) => {

    const [items, setItems] = useState([]);
    const [size, setSize] = useState(0)
    const [total, setTotal] = useState(0)

    const itemsContext = {
        items: items,
        addItem: (meal, number, isInCart) => {
            if (isInCart) {
                items.forEach((item, index) => {
                    if (item.id === meal.id) {
                        item.mult ++;
                    }
                })
            } else {
                setItems(prevItems => {
                    return [...prevItems, { ...meal, mult: number }]
                })
            }
        },
        size: size,
        addOnSize: (number) => {
            setSize(prevSize => prevSize + +number)
        },
        reduceSize: (number = 1) => {
            setSize(prevSize => prevSize - number)
        },
        total: total,
        addOnTotal: (amount) => {
            setTotal(total + amount)
        },
        addOnCart: (meal) => {
            const filteredMeals = items.filter(item => {
                return item.id !== meal.id
            })
            setItems([...filteredMeals,{...meal,mult:+meal.mult + 1}])
            setTotal(prevTotal => prevTotal + +meal.price)
            setSize(prevSize => prevSize + 1)    
        },
        deleteFromCart: (meal) => {
            setSize(prevSize => prevSize - 1)
            setTotal(prevTotal => prevTotal - meal.price)
            if (meal.mult > 1) {
                meal.mult--;
            } else {
                const filteredMeals = items.filter(item => {
                    return item !== meal;
                })
                setItems(filteredMeals)
            }
        }
    }

    return <AuthContext.Provider value={itemsContext}>
        {props.children}
    </AuthContext.Provider>

}

export default AuthContext;