import React, { useState } from 'react';

import './Navbar.css';

export default function Navbar({ setsearchTerm }) {
  const [inputValue, setInputvalue] = useState('');

  const handleChange = (event) => {
    setInputvalue(event.target.value);  // Update the input value when the user types
  };

  const handleClick = () => {
    setsearchTerm(inputValue);
    setInputvalue('')
  };

  return (
    <div className="Navbar-container">
      <div className="logo">
        Frontline 24/7
      </div>
      <div className="inputs">
        <input
          placeholder="e.g. football"
          onChange={handleChange}
          value={inputValue}
        />
       
        <button className="btn" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}
