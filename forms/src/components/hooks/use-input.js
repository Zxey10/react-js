import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState('')

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const valueInputBlur = (e) => {
        setIsTouched(true)
    }  

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        valueIsValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler,
        valueInputBlur,
        reset
    }
}

export default useInput;