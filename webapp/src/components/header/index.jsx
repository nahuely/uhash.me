import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

const Header = () => {
  return (
    <div className="menu">
      <div className="menu__logo">
        <h1>LOGO</h1>
      </div>
      <div className="menu__links">
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink
              to="/"
              activeClassName="menu__link--selected"
              className="menu__link"
              exact
            >
              Shortener
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              to="/login"
              activeClassName="menu__link--selected"
              className="menu__link"
              exact
            >
              Login
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              to="/sign-up"
              activeClassName="menu__link--selected"
              className="menu__link"
              exact
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
