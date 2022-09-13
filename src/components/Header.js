import React from "react";
import data from "../data/data.js";

function Header() {
  console.log(data)
  return (
    <header className="header">
      {/* <img src="" alt="" /> */}
      <i class="bi bi-globe2"></i>
      <h1>My Travel Journal</h1>
    </header>
  )
}

export default Header