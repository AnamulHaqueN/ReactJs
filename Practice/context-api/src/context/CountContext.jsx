import { createContext, useState} from "react";

export const Context1 = createContext();


 export const CountContext = ({children}) => {
    const [count, setCount] = useState(0)
  return (
    <Context1.Provider value = {[count, setCount]}>
        {children}
    </Context1.Provider>
  )
}