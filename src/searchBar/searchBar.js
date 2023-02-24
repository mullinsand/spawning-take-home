import './SearchBar.css';
import React, { useState } from "react";

function SearchBar({handleSearch}) {
  function onChange(e) {
    handleSearch(e.target.value);
  }

  return (
    <div>
      <input placeholder="Enter Item Name" onChange={onChange}/>
    </div>
  )
}

export default SearchBar;