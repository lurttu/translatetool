import React, { useState } from 'react'

const Input = ({ handler }) => {
  const [tempText, setTempText] = useState('')
  return (
    <div>
      <input
        onChange={event => {
          setTempText(event.target.value)
        }}
      />
      <button onClick={() => handler(tempText)}>Confirm</button>
    </div>
  )
}

export default Input
