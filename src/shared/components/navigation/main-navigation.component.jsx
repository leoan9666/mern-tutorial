import React from "react";
import { Link } from "react-router-dom";

import "./main-navigation.component.css";

import MainHeader from "./main-header.component";
import NavLinks from "./nav-links.component";
import SideDrawer from "./side-drawer.component";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
