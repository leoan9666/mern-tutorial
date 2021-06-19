import React from "react";
import { NavLink } from "react-router-dom";

import "./nav-links.component.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink exact to="/">
          All USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
