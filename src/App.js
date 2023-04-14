// import logo from './logo.svg';
import { useState,useContext } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
function App() {

  const [cartIsShown,setCasrtIsShown] = useState(false)

  const showCartHandler = () => {
    setCasrtIsShown(true)
  }

  const closeCartHandler = () => {
    setCasrtIsShown(false)
  }

  return (
    <CartProvider className="App">
      {cartIsShown && <Cart onClose = {closeCartHandler}/>}
      <header className="App-header" >
        <Header onShowCart={showCartHandler}/>
      </header>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
