import { useState, useEffect, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // 🔸 useEffect example
  useEffect(() => {
    console.log("Count changed:", count);
    document.title = `Clicked ${count} times`;
  }, [count]);

  // 🔸 useMemo example
  const doubleCount = useMemo(() => {
    console.log("Calculating double count...");
    return count * 2;
  }, [count]); // Only recalculates when count changes

  const themeStyle = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={themeStyle}>
      <h1>React + Vite Demo</h1>
      <p>Count: {count}</p>
      <p>Double (useMemo): {doubleCount}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setDark((prev) => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
