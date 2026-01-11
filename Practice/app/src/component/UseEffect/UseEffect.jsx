import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
      alert("Hey, useEffect");
    }, [])
    console.log("Hey, useEffect");
    const Increase = () => {
        setCount(count + 1);
    }

  return (
    <div>
      <h2>Count value is : {count}</h2>
      <button onClick={Increase}>Count</button>
    </div>
  )
}

export default UseEffect