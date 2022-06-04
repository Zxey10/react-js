import React, { Fragment, useEffect } from "react";
import { getAllExpenses } from "../store/expenses";
import { useDispatch, useSelector } from "react-redux";

export default function ReduxThunk() {

  const dispatch = useDispatch()  

  const {expenses, reqStatus} = useSelector(state => state.expenses)
  

   useEffect(() => {
       dispatch(getAllExpenses())
   },[dispatch]) 

   if(reqStatus === 'loading'){
       return <p>Loading</p>
   }
   if(reqStatus === 'failed'){
       return <p>Error</p>
   }
   if(reqStatus === 'success')
   console.log(expenses)
  return (
    <Fragment>
      <div>reduxThunk</div>
      <ul>
        {JSON.stringify(expenses)}
      </ul>
    </Fragment>
  );
}
