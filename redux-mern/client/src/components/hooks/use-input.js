import { useState } from "react"

const useInput = (validate) => {
    const [enteredValue,setEnteredValue] = useState('');
    const [isTouched,setIsTouched] = useState(false)

    const isValid = validate(enteredValue);
    const isInvalid = !isValid && isTouched;

    const handleChange = (e) => {
        setEnteredValue(e.target.value)
    }

    const handleBlur = () => {
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
        handleChange,
        handleBlur,
        reset
    }
}

export default useInput;