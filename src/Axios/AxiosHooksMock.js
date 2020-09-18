import React, { useState, useReducer } from 'react'
import axios from 'axios'
import greetingReducer from './greetingReducer'

const initialState = {
  error: null,
  greeting: null,
}


export default function AxiosMockTest() {
  const [{ error, greeting }, dispatch] = useReducer(
    greetingReducer,
    initialState
  )
  const [buttonClicked, setButtonClicked] = useState(false)

  const fetchGreeting = async () => {
    axios
      .get('/greeting')
      .then(response => {
        const { data } = response
        const { greeting } = data
        dispatch({ type: 'SUCCESS', greeting })
        setButtonClicked(true)
      })
      .catch(error => {
        dispatch({ type: 'ERROR', error })
      })
  }

  const buttonText = buttonClicked ? 'Details Fetched' : 'Load Student Details'

  return (
    <div>
      <button onClick={fetchGreeting} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting && <h1>{greeting}</h1>}
      {error && <p role="alert">Oops, failed to fetch details!</p>}
    </div>
  )
}
