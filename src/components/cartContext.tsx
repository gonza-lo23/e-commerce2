import * as React from 'react'
import { createContext,ReactNode, useContext } from 'react'

type shoppingCartProviderProps = {
  children : ReactNode
}

type CartItem = {
  id : number
  quantity: number
}

type shoppingCartContext = {
  getItemQuantity : (id:number) => number
  increaseCartQuantity : (id:number) => void
  decreaseCartQuantity : (id:number) => void
  removeFromCart : (id:number) => void

}



const shoppingCartContext = createContext({} as shoppingCartContext);

export function useShoppingCart() {
  return useContext( shoppingCartContext )
}

export function ShoppingCartProvider({children}:shoppingCartProviderProps){
  const [cartItems, setCartItems] = React.useState<CartItem[]>([])

const getItemQuantity =(id:number)=>{
  return cartItems.find(item => item.id === id)?.quantity || 0
}

const increaseCartQuantity = (id:number)=>{
  setCartItems(currItems => {
    if(currItems.find(item => item.id === id) == null){
      return [...currItems,{id, quantity: 1}]
    }else{
      return currItems.map(item => {
        if(item.id === id){
          return {...item, quantity: item.quantity + 1}
        }else {
          return item
        }
      })
    }
  })
}

const decreaseCartQuantity = (id:number) => {
  setCartItems(currItems => {
    if(currItems.find(item => item.id === id)?.quantity === 1){
      return currItems.filter(item => item.id !== id)
    }else{
      return currItems.map(item => {
        if(item.id === id){
          return {...item, quantity: item.quantity - 1}
        }else {
          return item
        }
      })
    }
  })
}

const removeFromCart =(id:number)=>{
  setCartItems(currItems => {
    return currItems.filter( item => item.id !== id)
  })
}



  return(
    <shoppingCartContext.Provider 
    value={{ 
    getItemQuantity,
    increaseCartQuantity, 
    decreaseCartQuantity,
    removeFromCart }}>
      {children}
    </shoppingCartContext.Provider>
  )
}
