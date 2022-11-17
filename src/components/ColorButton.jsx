import React, { useState } from 'react';

const ColorButton = ({disabled}) => {

  const [ buttonColor, setButtonColor ] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <button 
      style={{ backgroundColor: disabled ? "gray" : buttonColor, color: 'white' }}
      disabled={disabled}
      onClick={() => setButtonColor(newButtonColor)}>
      Change to {newButtonColor}
    </button>
  )
}

export default ColorButton