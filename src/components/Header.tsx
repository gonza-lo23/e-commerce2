import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <div className='
    md:flex
    my-40
    px-5
    
    '>
    <div >
    <img  className='pr-28 pl-12 h-auto 'src="https://i.pinimg.com/564x/2f/d3/48/2fd3481d7a5a6f9a2fef12272849f9be.jpg" alt="phone-case" />
    </div>
    <div className=''>
    <h1 className='
    text-7xl 
    w-auto
    m-3 mb-4 pb-20
    '>
     Check Your Style</h1>
    <span  className='text-3xl'>
        when, where and how ?? the place were you will find the asnw
    </span>
    </div>
    </div>
  )
}

export default Header