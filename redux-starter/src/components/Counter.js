import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {

  const counterValue = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({type: 'showCounter'})
  };

  const incrementHandler = () =>{
    dispatch({type: 'increment'})
  }

  const decrementHandler = () =>{
    dispatch({
      type: 'decrement',
      value: 2
    })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterValue}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {showCounter && <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>}
    </main>
  );
};

export default Counter;
