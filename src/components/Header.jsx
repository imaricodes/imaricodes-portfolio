import React from 'react'
import NavBar from './NavBar'
import HeaderContent from './HeaderContent'

const Header = () => {
  return (
      <div className="relative  bg-no-repeat bg-right-top bg-hero h-screen">
    <div className='header w-full h-screen relative '>
      <span className=''>

        <NavBar />
      </span>
        <HeaderContent />
      </div>
    </div>
  )
}

export default Header