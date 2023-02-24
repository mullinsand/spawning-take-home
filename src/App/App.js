import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ProductIndex from '../ProductIndex/ProductIndex';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import React, { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cart, setCart] = useState([])

  function handleSearch(newSearchQuery) {
    setSearchQuery(newSearchQuery)
  }
  
  function updateCart(postId, postPrice) {
    setCart(addProductToCart(postId, postPrice));
  }

  function addProductToCart(postId, postPrice) {
    let cartItem = {'id': postId, 'price': parseFloat(postPrice.slice(1))}
    let newCart = [...cart, cartItem]
    return newCart
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch}/>
      <ShoppingCart cart={cart}/>
      <ProductIndex searchQuery={searchQuery} addProductToCart={addProductToCart}/>
    </div>
  )
}

export default App;
