import React from 'react'
import { useLoaderData } from 'react-router-dom'

const MoreInfo = () => {
  
  const data = useLoaderData();
  const {title, price, category} = data;
  
  return (
    <div>
        <h1 className='text-2xl'> Title: {title}</h1>
        <p className=''> Price: ${price}</p>
        <p> Category: {category}</p>
    </div>
  )
}

export default MoreInfo