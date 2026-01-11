import React from 'react'

const Carts = ({product}) => {

    const {name, age, profession} = product;
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
        <h1 className="text-xl font-semibold mb-2">Cart Details : </h1>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{profession}</h1>
    </div>
  
  )
}

export default Carts