import React from 'react'

const Output = ({ text }) => {
  return (
    <div className={'container'}>
      {text.map(text => {
        return (
          <div className={'result'} key={Math.random() * 999999}>
            {text.map(item => {
              console.log(item)
              return (
                <p key={item.slug}>
                  <b>{item.slug}</b>
                  {' ' + item.japanese[0].reading + ' '}
                  {item.senses.map(sense =>
                    sense.english_definitions.map((ed, i, arr) => (
                      <i>{arr.length - 1 === i ? ed : ed + ', '}</i>
                    ))
                  )}
                </p>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Output
