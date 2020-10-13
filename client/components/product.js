import React from 'react'

const Product = ({ product }) => {
  return (
    <article className="p-5 border border-gray-200">
      <figure className="card__image h-56">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
      </figure>
      <h3 className="card__title uppercase py-2">{product.title}</h3>
      <div className="card__price text-xl font-semibold">
        {product.price} <span className="currency">USD</span>
      </div>
      <footer className="flex justify-between mt-3">
        <button
          type="button"
          className="px-5 py-2 border-2 border-accent-100 rounded-sm bg-accent-100 text-accent-200 hover:bg-transparent transition duration-300 ease-out"
        >
          Add to cart
        </button>
        <div className="card__product-amount flex items-center">
          <svg
            className="w-6 h-6 mr-1"
            fill="#7dd5c9"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          In the cart: 1
        </div>
      </footer>
    </article>
  )
}

Product.propTypes = {}

export default Product
