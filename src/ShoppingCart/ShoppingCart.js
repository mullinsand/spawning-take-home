import './ShoppingCart.css';
import React, { useState } from "react";

function ShoppingCart({cart}) {

  const cartTotal = cart.reduce((total, {price}) => total + price, 0).toFixed(2);

  return (
    <div>
      <h4>Shopping Cart</h4>
      <p>Number of Items: {cart.length}</p>
      <p>Total: ${cartTotal}</p>
    </div>
  )
}

export default ShoppingCart;