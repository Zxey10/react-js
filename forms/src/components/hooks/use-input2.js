import { useState } from "react"

const useInput2 = (validateEmail) => {

    const [enteredValue,setEnteredValue] = useState('');
    const [isTouched,setIsTouched] = useState(false)

    const enteredValueIsValid = validateEmail(enteredValue)
    const hasError = !enteredValueIsValid && isTouched

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const valueBlurHandler = (e) => {
        setIsTouched(true)
    }

    const reset = () => {
        setIsTouched(false)
        setEnteredValue('')
    }

    return {
        enteredValue,
        enteredValueIsValid,
        valueChangeHandler,
        valueBlurHandler,
        hasError,
        reset
    }
}

export default useInput2;