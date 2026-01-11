import React, { useState } from 'react'
import useCounter from '../../Hooks/useCounter'

const Counter2 = () => {

  const [counter, Increment, Decrement] =  useCounter(12)
  return (
    <div>
        <h3>Counter2 ~ {counter}</h3>
        <button onClick = {Increment}>Increment</button>
        <button onClick = {Decrement}>Decrement</button>
    </div>
  )
}

export default Counter2