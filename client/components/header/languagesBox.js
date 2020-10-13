import React from 'react'

const LanguagesBox = () => {
  return (
    <ul className="flex items-center ml-auto mr-8">
      <li className="mx-1 p-1 border border-accent-100">
        <button type="button">USD</button>
      </li>
      <li className="mx-1 p-1 cursor-pointer">
        <button type="button">EUR</button>
      </li>
      <li className="mx-1 p-1 cursor-pointer">
        <button type="button">CAD</button>
      </li>
    </ul>
  )
}

LanguagesBox.propTypes = {}

export default LanguagesBox
