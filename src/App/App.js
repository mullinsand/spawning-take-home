import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ProductIndex from '../ProductIndex/ProductIndex';
import React, { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  function handleSearch(newSearchQuery) {
    setSearchQuery(newSearchQuery)
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch}/>
      <ProductIndex searchQuery={searchQuery}/>
    </div>
  )
}

export default App;
