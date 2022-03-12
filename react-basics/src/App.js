import React ,{ useState,useEffect } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const App = () => {

  const [inputValue,setInputValue] = useState('');
  const [url,setUrl] = useState('/api/')

  const [expenses,setExpenses] = useState([
    {id:1,title:'Car Insurance',amount:294.67,date:new Date(2021,1,28)},
    {id:2,title:'Toiler Paper',amount:14.89,date:new Date(2021,8,30)},
    {id:3,title:'Electricity',amount:100.31,date:new Date(2021,8,29)},
    {id:4,title:'Food',amount:300,date:new Date(2021,8,16)},
    {id:1,title:'Car Insurance 2',amount:294.67,date:new Date(2022,3,31)},
    {id:2,title:'Toiler Paper 2',amount:14.89,date:new Date(2022,6,30)},
    {id:3,title:'Electricity 2',amount:100.31,date:new Date(2020,2,29)},
    {id:4,title:'Food 2',amount:300,date:new Date(2020,2,16)},
  ])

  const addExpenseHandler = (expense) => {
    console.log(expense)
    setExpenses(prevExpenses => {
      return [...prevExpenses,expense]
    })
  }


  return (
    <div className="App"> 
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
