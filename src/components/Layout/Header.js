import React from 'react'
import img1 from '../../asserts/meals.jpg';
import classes from './Header.module.css'
import HeaderCart from './HeaderCart';
function Header(props) {
  return (
    <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCart onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={img1} alt="Img preview " />
        </div>
    </>
  )
}

export default Header