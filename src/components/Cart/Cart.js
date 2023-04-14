import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

function Cart(props) {

    const cartItem = [{ id: 'c1', name: "Suchi", amount: '2', price: 12.33 }].map((item) => <li>{item.name}</li>)

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItem}
            </ul>
            <div className={classes.total}>
                <span>Amount</span>
                <span>34.55</span>
            </div>
            <div className={classes.actions}> 
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart