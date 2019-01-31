import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import { authSelector } from "../../redux/selectors/auth";

import "./styles.scss";

class Header extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { auth } = this.props;

    // TODO: abstract the generation of the menu to a method, using the routes structure to generate it
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
                  to="/links"
                  activeClassName="menu__link--selected"
                  className="menu__link"
                  exact
                >
                  Links
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/groups"
                  activeClassName="menu__link--selected"
                  className="menu__link"
                >
                  Groups
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/campaign"
                  activeClassName="menu__link--selected"
                  className="menu__link"
                >
                  Campaign
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/stats"
                  activeClassName="menu__link--selected"
                  className="menu__link"
                >
                  Stats
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/profile"
                  activeClassName="menu__link--selected"
                  className="menu__link"
                >
                  Profile
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
                >
                  Login
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/sign-up"
                  activeClassName="menu__link--selected"
                  className="menu__link"
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

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Header)
);
