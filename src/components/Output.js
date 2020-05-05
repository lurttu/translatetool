import React from 'react'

const Output = ({ text }) => {
  return (
    <div className={'container'}>
      {text.map(text => {
        return (
          <div className={'result'} key={Math.random() * 999999}>
            {text.map(item => {
              return (
                <p key={Math.random() * 9999999999}>
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
