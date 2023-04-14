import React,{useReducer} from 'react'
import CartContext from './Cartcontext'

const defaultCartState = {
  items:[],
  totalAmount:0
}

const cartReducer = (state,action) => {
  if(action === "ADD")
  {
    const updatedCartItem = state.items.concat(action.item)
    const updateTotalAmount = state.totalAmount+action.item.price*action.item.amount
  }
  return defaultCartState
}

function CartProvider(props) {
   const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState)
  
    const addItemToCartHandler = (item) => {
      dispatchCartAction({type:'ADD',item:item})
    }

    const removeItemFromCartHandler = (id) => {
      dispatchCartAction({type:'REMOVE',id:id})
    }

  const cartContext = {
    item:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }  
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider