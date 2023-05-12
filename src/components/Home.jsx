import React from 'react'
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
  return (
    <div className='flex flex-col relative w-full'>
    
        <Projects />
        <Skills />
        </div>
  )
}

export default Home