import { useState } from "react"

const UseState = () => {
    
    const x = 10;
    const [price, setPrice] = useState(x);

    const increment = () => {
        setPrice(price + 1);
    }

    const decrement = () => {
        setPrice(price - 1);
    }
  
    return (
        <div>
            <h1>Price is : {price} </h1>
            <button onClick = {increment}>Increase</button>
            <button onClick = {decrement}>Decrease</button>
        </div>
    )
}

export default UseState;