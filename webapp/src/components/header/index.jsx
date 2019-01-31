import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import { authSelector } from "../../redux/selectors/auth";

import "./styles.scss";

class Header extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { auth } = this.props;

    if (auth) {
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
                <button onClick={this.handleLogout}>logout</button>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
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
    }
  }
}

const mapStateToProps = state => ({
  auth: authSelector(state)
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
