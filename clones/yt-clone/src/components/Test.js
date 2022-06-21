import React from 'react'

const Test = ({ children, text }) => {
    return (
        <div>
            {children}
            <h3>{text}</h3>
        </div>
    )
}

export default Test
