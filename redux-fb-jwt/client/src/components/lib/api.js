const FIREBASE_DOMAIN ="https://expense-tracker-909a9-default-rtdb.europe-west1.firebasedatabase.app/";

export const fetchExpenseById = async (expenseId) => {
    let data = {};

    const res = await fetch(`${FIREBASE_DOMAIN}/Expenses/${expenseId}/.json`);
    if (!res.ok) throw new Error("Get Expense Req Failed");

    const json = await res.json();
    console.log(json)

    let transformedItems = []

    for(let key in json.items){
        transformedItems.push({
            id: json.items[key].id,
            price: json.items[key].price,
            text: json.items[key].text,
            FBId: key
        })
    }

    json.items = transformedItems;

    data = {
        idFB: expenseId,
        ...json,
    };
    return data;
};
