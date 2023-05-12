import React from 'react'
import NavBar from './NavBar'
import HeaderContent from './HeaderContent'

const Header = () => {
  return (
    <div className='header w-full h-screen relative '>
      <span className=''>

        <NavBar />
      </span>
        <HeaderContent />
      
    </div>
  )
}

export default Header