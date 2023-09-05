import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product/Components/ProductList'


export const Home = () => {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    </div>
  )
}
