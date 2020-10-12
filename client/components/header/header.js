import React from 'react'
import Logo from './logo'
import LanguagesBox from './languagesBox'
import CartBtn from './cartBtn'

const Header = () => {
  return (
    <header className="py-6 border-b border-gray-200">
      <div className="container flex items-center">
        <Logo />
        <LanguagesBox />
        <CartBtn />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
