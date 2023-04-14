import React,{useContext} from 'react'
import CartContext from '../../store/Cartcontext'
import CartIcon from '../Cart/CartIcon'
import classes from '../Layout/HeaderCartButton.module.css'

function HeaderCart(props) {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);
  const numberOfCartItem = cartCtx.item.reduce((curNumber,item)=>{
    return curNumber+item.amount
  },0);

  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span >
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberOfCartItem}
        </span>
    </button>
  )
}

export default HeaderCart