import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        className="nav-link"
      >
        Shop
      </NavLink>
      <NavLink
        to="/cart"
        exact
        className="nav-link"
      >
        Cart
      </NavLink>
      <NavLink
        to='/admin'
        exact
        className='nav-link'
        >
        Admin
        </NavLink>
    </div>
  );
}
export default NavBar;