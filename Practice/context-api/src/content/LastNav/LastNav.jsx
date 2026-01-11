import React, { useContext } from 'react'
import { Context1 } from '../../context/CountContext';



const LastNav = () => {
  
  const [count, setCount] =  useContext(Context1);

  return (
    <div>
        <button onClick = {() => setCount(count + 1)} >Count Last Nav - {count} </button>
    </div>
  )
}

export default LastNav