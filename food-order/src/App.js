import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import FoodList from './components/Food/FoodList/FoodList';
import './App.css';


function App() {

  const [meals,setMeals] = useState([
    {id:Math.random().toString(),name:'Food 1',price:'32',info:"Just some random info"},
    {id:Math.random().toString(),name:'Food 2',price:'32',info:"Just some random info"},
    {id:Math.random().toString(),name:'Food 3',price:'32',info:"Just some random info"},
    {id:Math.random().toString(),name:'Food 4',price:'32',info:"Just some random info"},
    {id:Math.random().toString(),name:'Food 5',price:'32',info:"Just some random info"},
    {id:Math.random().toString(),name:'Food 6',price:'32',info:"Just some random info"},
  ])

  return (
    <div className="App">
      <Navbar />
      <Header />
      <FoodList meals={meals}/>
    </div>
  );
}

export default App;
