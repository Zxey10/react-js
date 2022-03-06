import React ,{ useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const App = () => {

  const [inputValue,setInputValue] = useState('');
  const [url,setUrl] = useState('/api/')

  const expenses = [
    {id:1,title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
    {id:2,title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
    {id:3,title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
    {id:4,title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},

  ]


  return (
    <div className="App"> 
      <NewExpense />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
