import { useEffect, useMemo, useState, type JSX } from 'react'
import './App.css'

function App():JSX.Element {
  const [number, setNumber] = useState<number>(0)
  const [dark, setDark] = useState<boolean>(false);
  const [doubleNumber, setDoubleNumber] = useState(0);
  
  const Number = useMemo(() => {return slowFunction(number)}, [number])

  //const doubleNumber = slowFunction(number);

  useEffect(() => {
      const result = slowFunction(number);
      setDoubleNumber(result);
    
  }, [number])

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white': 'black'
  }
 
  return (
    <div>
      <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))}></input>
      <button onClick={() => setDark(prev => !prev)}>Change Theme</button>
      <div style={themeStyles}>{Number}</div>
    </div>
  )
}

export default App

function slowFunction(num: number) {
  console.log('Calling slow function');
  for(let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
