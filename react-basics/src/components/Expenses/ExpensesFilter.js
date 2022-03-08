import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  function selectValueHandler(e){
    //setSelectValue(e.target.value)
    props.addExpenseFilter(e.target.value)
  }  

  function sortExpensesByDate(){
    props.onSortExpenses(props.expenses)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectValueHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
      <button onClick={sortExpensesByDate}>SORT BY DATE</button>
    </div>
  );
};

export default ExpensesFilter;