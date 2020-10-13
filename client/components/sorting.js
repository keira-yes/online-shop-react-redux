import React from 'react'

const Sorting = () => {
  return (
    <div className="flex items-center">
      <span className="mr-4">Sort by:</span>
      <button
        type="button"
        className="sort-price mx-2 p-1 uppercase text-xl border border-accent-100"
      >
        Price
      </button>
      <button type="button" className="sort-name mx-2 p-1 uppercase text-xl">
        Title
      </button>
    </div>
  )
}

Sorting.propTypes = {}

export default Sorting
