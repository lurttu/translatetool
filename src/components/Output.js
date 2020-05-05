import React from 'react'

const Output = ({ text }) => {
  return (
    <div>
      {text.map(item => {
        console.log(item)
        return <p key={Math.random() * 9999999999}>{item}</p>
      })}
    </div>
  )
}

export default Output
