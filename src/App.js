import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

let DUMMY__EXPENSE = [
    {
        id: 'e1',
        title: 'School fee',
        amount: 300,
        date: new Date(2022, 5, 18)
    },
    {
        id: 'e2',
        title: 'Book',
        amount: 200,
        date: new Date(2022, 4, 28)
    },
    {
        id: 'e3',
        title: 'House Rent',
        amount: 500,
        date: new Date(2022, 5, 10)
    },
    {
        id: 'e4',
        title: 'Food',
        amount: 150,
        date: new Date(2022, 5, 15)
    }
];
const App = () => {

    const [expenses, setExpenses] = useState(DUMMY__EXPENSE)

    const addExpenseHandler = (expense) => {
        const updatedExpenses = [expense, ...expenses];
        setExpenses(updatedExpenses);
    }
    return (
        <>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </>
    )
}

export default App;