import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>TodoList</h1>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">About</Link>
    </header>
  );
}

export default Header;
