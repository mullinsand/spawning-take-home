import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ProductIndex from '../ProductIndex/ProductIndex';
import React, { useState } from "react";

function App() {
  return (
    <div>
      <SearchBar />
      <ProductIndex />
    </div>
  )
}

export default App;
