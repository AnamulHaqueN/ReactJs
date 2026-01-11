import React, { useState } from 'react'
import useCounter from '../../Hooks/useCounter'

const Counter1 = () => {
    
    const [counter, Increment, Decrement] = useCounter(5);

    return (
      <div>
          <h3>Counter1 ~ {counter}</h3>
          <button onClick = {Increment}>Increment</button>
          <button onClick = {Decrement}>Decrement</button>
      </div>
    )
}

export default Counter1