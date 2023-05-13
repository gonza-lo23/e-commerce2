import * as React from 'react'
import Item  from './Item';

function Galery() {


const [productoK, setProductoK ]= React.useState([]);

React.useEffect(()=>{
  fetch("http://localhost:3000/products")
  .then((response) => response.json())  
	.then((data) => setProductoK(data));
})  




  return (
    <div className='h-screen'>
    <h1 className='mx-20 font-bold text-5xl'>Los productos de hoy</h1>
    
    <div className='
    md:container
    grid
    grid-cols-4
    mx-auto
    my-10
    m-2 
    '>
      {
      productoK.map((productos)=>{
      return(  
       <Item
       key={productos.id}
       id={productos.id}
       title= {productos.title}
       size= {productos.size}
       color={productos.color}
       quantity={productos.quantity}
       img={productos.img}
       price={productos.price}
       stock={productos.stock}
       />
    )})
    }
    </div>
    </div>
  )
}

export default Galery



