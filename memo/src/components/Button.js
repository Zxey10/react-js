import React from 'react'

function Button(props) {
  console.log('Button Running');
  return (
    <button onClick={props.onClick}>{props.children}</button>
  )
}

export default React.memo(Button)