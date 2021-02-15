import React from 'react'
import "./button.css"
function Button({text}) {
    return (
        <button type="button" className="customBtn" >{text}</button>
    )
}

export default Button
