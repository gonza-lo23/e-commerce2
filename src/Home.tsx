import * as React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Galery from './components/Galery'
import {ShoppingCartProvider} from './components/cartContext'

function Home() {
  return (

    <div className=''>
      <ShoppingCartProvider>
        <Navbar/>
        <Header/>
        <Galery/>
      </ShoppingCartProvider>
    </div>
  )
}

export default Home