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
              to="/stats"
              activeClassName="menu__link--selected"
              className="menu__link"
              exact
            >
              Stats
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              to="/about-us"
              activeClassName="menu__link--selected"
              className="menu__link"
              exact
            >
              How we are
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
