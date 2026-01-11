import {useState, type JSX } from 'react'
import './App.css'

function App(): JSX.Element {
  const [count, setCount] = useState(() => {
    console.log("Rendering .... ");
    return 0;
  })
  return (
    <div>
      <h1>Count - {count} </h1>
      <button onClick={() => setCount(prev => prev + 1)}>add</button>
    </div>
  )
}

export default App
