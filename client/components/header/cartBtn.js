import React from 'react'
import { Link } from 'react-router-dom'

const CartBtn = () => {
  return (
    <Link to="/basket" className="flex items-center text-xs">
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="#7dd5c9"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      <p>
        <span id="order-count" className="block">
          3 item(s)
        </span>
        <span>
          1586<span> USD</span>
        </span>
      </p>
    </Link>
  )
}

CartBtn.propTypes = {}

export default CartBtn
