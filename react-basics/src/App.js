import Title from './components/Title';
import Expenses from './components/Expenses';
import './App.css';

function App() {

  const expenses = [
    {title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
    {title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
    {title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
    {title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},

  ]

  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
