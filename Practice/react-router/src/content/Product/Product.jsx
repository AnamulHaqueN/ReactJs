import React from 'react'
import { Link } from 'react-router-dom';
const Product = ({product}) => {
    const {title, price, category} = product;
  return (
    <div className='border mt-6 mr-6 h-60'>
        <h1 className='text-2xl'> Title: {title}</h1>
        <p className=''> Price: ${price}</p>
        <p> Category: {category}</p>
        <Link to={`/products/${product.id}`}>
           <button className='bg-amber-300 h-10 w-25 mt-5'>More Info</button>
        </Link>
    </div>
  )
}
export default Product