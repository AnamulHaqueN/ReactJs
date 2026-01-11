import {useContext, useState } from 'react'
import './App.css'
import Navbar from './content/Navbar/Navbar';
import { Context1, CountContext } from './context/CountContext';


function App() {
  

  return (
    <div> 
        <CountContext>
              <Navbar />
              <CounterBtn />
        </CountContext>

    </div>
  )
}

function CounterBtn() {
  const [count, setCount] = useContext(Context1);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> 
    </div>
  )
}

export default App
