import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const [selectValue,setSelectValue] = useState('2022')  

  function selectValueHandler(e){
    setSelectValue(e.target.value)
    props.addExpenseFilter(e.target.value)
  }  

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={selectValueHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;