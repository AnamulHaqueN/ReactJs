import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from '../Product/Product'
const Products = () => {
  const products = useLoaderData();
  //console.log(products);
  return (
    <div className='grid grid-cols-3'>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      {
        products.map((product) => (
          <Product key={product.id} product = {product} />
        ))
      }
    </div>
  )
}

export default Products