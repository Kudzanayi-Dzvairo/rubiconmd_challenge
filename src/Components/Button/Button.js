import React from 'react'

function Button({ value, type, onClick, styleClass, imageIndex, cardIndex}) {
     
    //reusable button component for noRedactNeeded, Redact and Done
    return (
            <button 
                onClick={() =>onClick(cardIndex, imageIndex)} 
                type={type} 
                className={styleClass}
                data-testid='btn'
            >
              {value}
            </button>

    )
}

export default Button
