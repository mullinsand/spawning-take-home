import './SearchBar.css';
import React, { useState } from "react";

function SearchBar({handleSearch}) {
  function onChange(e) {
    handleSearch(e.target.value);
  }

  return (
    <div className='searchbar-container'>
      <h4>Search by Name:</h4><input placeholder="Enter Item Name" onChange={onChange}/>
    </div>
  )
}

export default SearchBar;