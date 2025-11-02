import React from 'react'
import CardComponent from './CardComponent'
import Footer from './Footer'
import "./Product.css"

const Products = () => {
  return (
    <>
    <div className='products'>
      <CardComponent />
    </div>
    <div>
      <Footer />
    </div>
    </>
  )
}

export default Products
