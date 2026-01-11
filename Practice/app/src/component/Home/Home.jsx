import React from 'react';


const Home = ({product, forAlert}) => {
    console.log(product.name);
    return (
        <div>
          <h2>Product Name: {product.name} </h2>
          <h2>Product Price: {product.price}</h2>
          <button onClick={forAlert} >Click me !</button>
        </div>
    )
}

export default Home;