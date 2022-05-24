const FIREBASE_DOMAIN ="https://expense-tracker-909a9-default-rtdb.europe-west1.firebasedatabase.app/";

export const fetchExpenseById = async (expenseId) => {
    let data = {};

    const res = await fetch(`${FIREBASE_DOMAIN}/Expenses/${expenseId}/.json`);
    if (!res.ok) throw new Error("Get Expense Req Failed");

    const json = await res.json();

    data = {
        idFB: expenseId,
        ...json,
    };
    return data;
};
