import './SearchBar.css';
import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("")
  
  return (
    <div>
      <input placeholder="Enter Item Name" onChange={event => setQuery(event.target.value) }/>
    </div>
  )
}

export default SearchBar;