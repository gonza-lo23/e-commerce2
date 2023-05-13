import * as React from 'react';
import { useShoppingCart } from './cartContext';



 function Item({id, title, size, color, quantity,img,price,stock}:ItemSelect){
    
  const {
    getItemQuantity, 
    increaseCartQuantity, 
    decreaseCartQuantity,
    removeFromCart } = useShoppingCart();


    type ItemSelect = {
        id:number;
        title: string;
        size: string;
        color:string;
        quantity:number;
        img:string;
        price:number;
        stock:number;
    }
    
    
    
  return (
    <div key={id} className='
    grid
    font-mono	
    border-2
    border-black
    rounded-md
    m-5
    '>
      <div className='
      pt-5
      border-2
      border-black
      
      '>
        <img src={img} alt="" />
      </div>
      <h1 className='text-5xl font-bold  m-2 p-3'>{title}</h1>
      <h1 className='text-4xl   m-2 p-3'>${price}</h1>

      <div className='
      text-2xl  m-1 p-3 gap-2
      grid
      '>
        <div className='grid grid-cols-2'>
      <p>{size}</p>
      <p>{color}</p>
      <p>&{stock}</p>
      </div>
      <div className='flex gap-6 m-1 ml-16 mb-4'>
     <button 
     onClick={()=> decreaseCartQuantity(id)}
     className='bg-red-300 w-8 cursor-pointer rounded-md'>-</button>
     <p>0</p>
     <button 
     onClick={()=> increaseCartQuantity(id)}
     className='bg-red-300 w-8 cursor-pointer rounded-md'>+</button>
     </div>
    <button 
    className='bg-red-300 cursor-pointer '>añadir</button>
      </div>
    </div>
  )
}

export default Item ;