import React from 'react'

function Demo(props) {
    
    console.log('Demo Running');

    return (
    <div>
        <p>{props.show ? 'this is new' : ''}</p>
    </div>
  )
}
export default React.memo(Demo);
