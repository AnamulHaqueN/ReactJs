import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './content/Home/Home.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Product from './content/Products/Products.jsx'
import About from './content/About/About.jsx'
import Contract from './content/Contract/Contract.jsx'
import Blog from './content/Blog/Blog.jsx'
import Error from './content/Error/Error.jsx'
import Products from './content/Products/Products.jsx'
import MoreInfo from './content/MoreInfo/MoreInfo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />,
        loader: () => fetch('https://fakestoreapi.com/products'),
      },
      {
        path: '/products/:productId',
        loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.productId}`),
        element: <MoreInfo />
      }
      ,
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contract',
        element: <Contract />
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
