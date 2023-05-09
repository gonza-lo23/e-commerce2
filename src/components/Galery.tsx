import * as React from 'react'

function Galery() {

const [productoK, setProductoK ]= React.useState();

React.useEffect(()=>{
  fetch("http://localhost:3000/products")
  .then((response) => response.json())  
	.then((data) => setProductoK(data));
})  

  return (
    <div className='
    md:container
    grid
    grid-cols-4
    mx-auto
    my-10
    h-screen
    m-2 
    md:items-center 
    '>
      {
      products.map((p)=>{
      return(  
    <div key={p.id}className='
    font-mono	
    border-2
    border-black
    rounded-md
    w-auto
    h-auto
    m-auto
    p-2
    '>
      <div className='
      object-contain
      h-40
      w-40'>
        <img src={p.img} alt="" />
      </div>
      <h1 className='text-5xl font-bold  p-3'>{p.title}</h1>
      <div className='
      text-2xl  m-1 p-3 gap-2
      grid '>
      <p>{p.size}</p>
      <p>{p.color}</p>
      <p>${p.price}</p>
      <div className='flex gap-6 m-1'>
     <button className='bg-red-300 cursor-pointer rounded-md'>+</button>
     <p>0</p>
     <button className='bg-red-300 cursor-pointer rounded-md'>-</button>
     </div>
    <button className='bg-red-300 cursor-pointer '>añadir</button>
      </div>
    </div>
    )})
    }
    </div>
  )
}

export default Galery

interface products {
  id: number;
  title: string;
  size: string;
  color: string;
  quantity: string;
  img: string;
}

const products = [
  {
      "id": 1,
      "title": "camisa",
      "size": "m",
      "color":"black",
      "quantity":"3",
      "price":"300",
      "img":"https://i.pinimg.com/564x/06/a2/f2/06a2f269b4cde2c3f428d0d476f55a16.jpg"
  },
  {
      "id": 2,
      "title": "camisa",
      "size": "m",
      "color":"black",
      "quantity":"3",
      "price":"300",
      "img" :"https://i.pinimg.com/236x/ce/4b/f6/ce4bf6e4f4443f78c36a4c6b172381c6.jpg "

  },
  {
      "id": 3,
      "title": "camisa",
      "size": "m",
      "color":"black",
      "quantity":"3",
      "price":"300", 
      "img":"https://i.pinimg.com/736x/c2/19/8c/c2198cc949555b311e5d31adfc4860e3.jpg"

  },
  {
      "id": 4,
      "title": "camisa",
      "size": "m",
      "color":"black",
      "quantity":"3",
      "price":"300",
      "img":"https://i.pinimg.com/564x/06/a2/f2/06a2f269b4cde2c3f428d0d476f55a16.jpg"

  },
  {
    "id": 5,
    "title": "camisa",
    "size": "m",
    "color":"black",
    "quantity":"3",
    "price":"300", 
    "img":"https://i.pinimg.com/736x/c2/19/8c/c2198cc949555b311e5d31adfc4860e3.jpg"

},
{
  "id": 6,
  "title": "camisa",
  "size": "m",
  "color":"black",
  "quantity":"3",
  "price":"300", 
  "img":"https://i.pinimg.com/736x/c2/19/8c/c2198cc949555b311e5d31adfc4860e3.jpg"

},
{
  "id": 7,
  "title": "camisa",
  "size": "m",
  "color":"black",
  "quantity":"3",
  "price":"300", 
  "img":"https://i.pinimg.com/736x/c2/19/8c/c2198cc949555b311e5d31adfc4860e3.jpg"

},

]
