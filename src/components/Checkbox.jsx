import React from 'react'

const Checkbox = ({id, defaultChecked, onChange}) => {
  return (
    <>
        <label htmlFor={id}>Disable button</label>
        <input
            type={"checkbox"} 
            id={id}
            defaultChecked={defaultChecked}
            onChange={onChange}
        />
    </>
  )
}

export default Checkbox