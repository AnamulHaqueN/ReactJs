import { useState } from 'react'
import './App.css'
import Home from './component/Home/Home'
import UseState from './component/UseState/UseState'
import UseEffect from './component/UseEffect/UseEffect';
import FetchAPI from './component/FetchAPI/FetchAPI';
import FakeData from './component/FakeData/FakeData';
import Carts from './component/Carts/Carts'
function App() {
    
    /*
    const products = [
        {name: 'Nokia', price: 1200},
        {name: 'Sumsung', price: 2200},
        {name: 'itel p32', price: 1800}
    ];

    const forAlert = () => {
        alert('Alerting');
    }
    */

    const [cart, setCart] = useState([])

    const addToCart = (data) => {
        const newCart = [...cart, data];
        setCart(newCart);
        //console.log(cart);
    }

    return (
       <div className='flex gap-8'>
        {/* <UseState />
        <UseEffect /> 
        <FetchAPI /> */}
        <FakeData addToCart = {addToCart} />
        <div className="flex flex-col gap-4">
           {   
            cart.map((product) => (
                <Carts product = {product} />
            )
            )
        }
        </div>
       </div>
    )
}

export default App
