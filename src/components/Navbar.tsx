import * as React from 'react'
import { FaBeer } from 'react-icons/fa'
import { FcMenu } from 'react-icons/fc'


function Navbar() {
  return (
    <div className='
    md:container
    mx-auto
    md:flex
    md:items-center 
    md:justify-between
    w-screen
    bg-white
    text-2xl 
    font-bold 
    text-gray-700'>
        <div className='
        md:flex
        flex-row
        md:justify-between
        cursor-pointer
        '>      
        <h1 className='m-3   ml-3 mr-9'><FcMenu/></h1>
        <ul className='md:flex '>
            <li className='m-2 ml-3 mr-3'>about</li>
            <li className='m-2 ml-3 mr-3'>search</li>
        </ul>
        </div>
        <div>
            <button className='bg-gray-300 cursor-pointer'>L</button>
        </div>
        <div className='cursor-pointer' > 
        <ul className='md:flex'>
        <li className='m-2 ml-1 mr-4'>Log in</li>
        <div className='
        flex
        border-2
        rounded-lg
        bg-gray-300'>
        <li className='m-1 mt-2'>2</li>
        <li className='m-2 mt-3 ml-1 mr-3'><FaBeer/></li>
        </div>
        </ul>
        </div>
    </div>
  )
}

export default Navbar