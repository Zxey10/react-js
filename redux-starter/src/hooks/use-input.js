import { useState } from "react"

export const useInput = (validate) => {
    const [enteredValue,setEnteredValue] = useState('');
    const [isTouched,setIsTouched] = useState(false);
    
    const isEnteredValueValid = validate(enteredValue);
    const isInvalid = isTouched && !isEnteredValueValid;

    const changeHandler = (e) => {
        setEnteredValue(e.target.value);
    }

    const blurHandler = (e) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        enteredValue,
        isEnteredValueValid,
        isInvalid,
        changeHandler,
        blurHandler,
        reset
    }

}

