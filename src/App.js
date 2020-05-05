import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
import Input from './components/Input'
import Output from './components/Output'

const proxy = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://jisho.org/api/v1/search/words?keyword='

const App = () => {
  const [text, setText] = useState([])

  const handleTextChange = value => {
    const lookUpArray = value.split(' ')
    const resultArray = lookUpArray.map(item => {
      return axios.get(proxy + baseUrl + item).then(res => res.data.data)
    })
    Promise.all(resultArray).then(result => setText(result))
  }

  return (
    <div>
      <h1>辞書正引き</h1>
      <Input handler={handleTextChange} />
      {/* <Output text={text} /> */}
      <div class='container'>
        {text.map(text => {
          return (
            <div key={Math.random() * 999999}>
              {text.map(item => {
                return (
                  <p key={Math.random() * 9999999999}>
                    <b>{item.slug}</b>
                    {' ' + item.japanese[0].reading + ' '}
                    {item.senses.map(sense =>
                      sense.english_definitions.map(ed => <i>{ed + ', '}</i>)
                    )}
                  </p>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

//TODO: Take out the text and split it into an array
//map the array and do a lookup on each word and store the response
