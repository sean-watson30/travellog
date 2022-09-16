import React from "react";
import data from "../data/data.js";

function Header() {
  console.log(data)
  return (
    <header className="header">
        <i className="bi bi-globe2" id="header-content"></i>
        <h1 id="header-content">My Travel Journal</h1>
    </header>
  )
}

export default Header