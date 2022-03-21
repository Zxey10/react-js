import React, { useRef, useImperativeHandle } from 'react'

export default React.forwardRef(function Input(props,ref) {

  const inputRef = useRef()

  const activate = () => {
    inputRef.current.focus()
  }

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  })


  return (
    <div className={props.className}>
       <label htmlFor={props.htmlFor}>{props.labelText}</label>
          <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
    </div>
  )
})
