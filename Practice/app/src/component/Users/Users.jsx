import React from 'react'

const Users = ({data, addToCart}) => {
  return (
    <div className='border-2'>
      <h1 className='text-3xl'>{data.name}</h1>
      <p>{data.age}</p>
      <h1 className='text-2xl'>{data.profession}</h1>
      <p>{data.phone}</p>
      <button className='bg-emerald-600 rounded-md' onClick={() => addToCart(data)}>add to Cart</button>
    </div>
  )
}

export default Users