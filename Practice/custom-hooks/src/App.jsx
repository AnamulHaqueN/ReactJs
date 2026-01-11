import { useState } from 'react'
import './App.css'
import Counter1 from './component/Counter1/Counter1'
import Counter2 from './component/Counter2/Counter2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  )
}

export default App
