import * as React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Galery from './components/Galery'
import Productos from './components/Productos'

function Home() {
  return (
    <div className='
    grid
    '>
        <Navbar/>
        <Header/>
        <h1 className='text-5xl font-bold ml-20 m-6'>Los Productos de Hoy </h1>
        <Galery/>
        <Footer/>
    </div>
  )
}

export default Home