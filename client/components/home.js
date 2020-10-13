import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from './head'
import Product from './product'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios('/api/v1/products').then(({ data }) => {
      setProducts(data)
    })
  }, [])
  return (
    <main>
      <Head title="Home" />
      <div className="container">
        <h2 className="mt-6 mb-4 text-center uppercase text-3xl">Products</h2>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}

Home.propTypes = {}

export default Home
