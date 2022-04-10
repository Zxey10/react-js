import { useState } from "react";

const useInput = (validate) => {
    const [enteredValue,setEnteredValue] = useState('');
    const [isTouched,setIsTouched] = useState(false)

    const isValid = validate(enteredValue);
    const isInvalid = !isValid && isTouched;

    const changeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const blurHandler = (e) => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        enteredValue,
        isValid,
        isInvalid,
        changeHandler,
        blurHandler,
        reset
    }

}

export default useInput;