import { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from './components/Home';

function App() {
  const [name, setName] = useState<string>('')
  const PrevName = useRef('');
  const CountRef = useRef(0);
  
  useEffect(() => {
    CountRef.current = CountRef.current + 1;
    PrevName.current = name;
  }, [name])

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My current name is {name}</div>
      <div>and previous name is {PrevName.current}</div>
      <Home name={name} />
    </div>
  )
}

export default App
