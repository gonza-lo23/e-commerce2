import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <div className='
    md:container
    md:flex
    md:items-center 
    mx-auto
    m-20
    h-auto
    w-auto
    px-1
    bg-white
    md:justify-between

    '>
    <div id='container-img'>
    
    <img  className='m-2 'src="https://i.pinimg.com/564x/17/f5/a1/17f5a15ffc3dd4104491d196d064e682.jpg" alt="phone-case" />
    </div>
    <div className='
    
    '>
    <h1 className='
    text-7xl 
    w-auto
    m-3 mb-8
    '>
    Welcome to Land LA</h1>
    <span  className='text-3xl'>
        were toe as djadijasdjas
        dasijdada dasdaisjdiasjdijasdijasid
    </span>
    </div>
    </div>
  )
}

export default Header