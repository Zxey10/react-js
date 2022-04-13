import { createStore } from 'redux'

const initialState = {counter : 0 ,showCounter: true}
const counterReducer = (state = initialState , action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - action.value,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'showCounter'){
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;

// store.dispatch({type: 'increment'})
// store.dispatch({type: 'decrement'})