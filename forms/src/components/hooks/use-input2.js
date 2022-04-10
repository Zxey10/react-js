import { useReducer } from "react"


const ACTIONS = {
    UPDATE: 'UPDATE_VALUE',
    TOUCHED: 'INPUT_TOUCHED',
    RESET: 'RESET'
}

const defaultState = {
    enteredValue: '',
    isTouched: false
}

const inputReducer = (state,action) => {
    switch(action.type){
        case ACTIONS.UPDATE:
            return {
                ...state,
                enteredValue: action.value
            }
        case ACTIONS.TOUCHED:
            return {
                ...state,
                isTouched: true
            }
        case ACTIONS.RESET:
            return defaultState
        default:
            return state
    }
}


const useInput2 = (validateEmail) => {

    //const [enteredValue,setEnteredValue] = useState('');
    //const [isTouched,setIsTouched] = useState(false)

    const [inputState,dispacthInput] = useReducer(inputReducer,defaultState)

    console.log(inputState.enteredValue)
    const enteredValueIsValid = validateEmail(inputState.enteredValue)
    const hasError = !enteredValueIsValid && inputState.isTouched

    const valueChangeHandler = (e) => {
        //setEnteredValue(e.target.value)
        dispacthInput({
            type: 'UPDATE_VALUE',
            value: e.target.value
        })
    }

    const valueBlurHandler = (e) => {
        // setIsTouched(true)
        dispacthInput({
            type: 'INPUT_TOUCHED',
        })
    }

    const reset = () => {
        // setIsTouched(false)
        // setEnteredValue('')

        dispacthInput({
            type: 'RESET'
        })

    }

    return {
        enteredValue :inputState.enteredValue,
        enteredValueIsValid,
        valueChangeHandler,
        valueBlurHandler,
        hasError,
        reset
    }
}

export default useInput2;