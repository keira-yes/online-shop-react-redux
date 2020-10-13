import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProducts } from '../redux/reducers/products'
import Head from './head'
import Product from './product'
import Sorting from './sorting'

const Home = () => {
  const products = useSelector((store) => store.products.productsList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateProducts())
  }, [dispatch])
  return (
    <main>
      <Head title="Home" />
      <div className="container">
        <h2 className="mt-6 mb-4 text-center uppercase text-3xl">Products</h2>
        <Sorting />
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
