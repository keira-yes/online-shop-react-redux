import React from 'react'

const LanguagesBox = () => {
  return (
    <ul className="flex ml-auto mr-8">
      <li className="mx-2 underline hover:underline">
        <buttom type="button">USD</buttom>
      </li>
      <li className="mx-2 cursor-pointer hover:underline">
        <buttom type="button">EUR</buttom>
      </li>
      <li className="mx-2 cursor-pointer hover:underline">
        <buttom type="button">CAD</buttom>
      </li>
    </ul>
  )
}

LanguagesBox.propTypes = {}

export default LanguagesBox
