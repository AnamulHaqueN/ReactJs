import React, { useState } from 'react'

const useCounter = (init = 5) => {

    const [counter, setCounter] = useState(init);
    function Increment() {
        setCounter(counter + 1);
    }
    
    function Decrement() {
        setCounter(counter - 1);
    }

  return [counter, Increment, Decrement];
}

export default useCounter