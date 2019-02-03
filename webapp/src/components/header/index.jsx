import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { langOptions } from "../../config/langs";
import { logout } from "../../redux/actions/auth";
import { changeLanguage } from "../../redux/actions/ui";
import { authSelector } from "../../redux/selectors/auth";
import { uiSelector } from "../../redux/selectors/ui";
import Select from "../../components/select";

import "./styles.scss";

class Header extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  handleChangeLang = lang => {
    const selectedLang = lang.target.value;
    this.props.changeLanguage(selectedLang);
  };

  render() {
    const { auth, ui } = this.props;

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
                  <FormattedMessage id="nav.links" defaultMessage="Links" />
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/groups"
                  activeClassName="menu__link--selected"
                  className="menu__link"
                >
                  <FormattedMessage id="nav.groups" defaultMessage="Groups" />
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/campaign"
                  activeClassName="menu__link--selected"
                  className="menu__link"
                >
                  <FormattedMessage
                    id="nav.campaign"
                    defaultMessage="Campaign"
                  />
                </NavLink>
              </li>

              <li className="menu__item">
                <NavLink
                  to="/profile"
                  activeClassName="menu__link--selected"
                  className="menu__link"
                >
                  <FormattedMessage id="nav.profile" defaultMessage="Profile" />
                </NavLink>
              </li>
              <li className="menu__item">
                <Select
                  options={langOptions}
                  value={ui.lang}
                  onSelectOption={this.handleChangeLang}
                />
              </li>
              <li className="menu__item">
                <button onClick={this.handleLogout}>
                  <FormattedMessage id="nav.logout" defaultMessage="logout" />
                </button>
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
                  <FormattedMessage
                    id="nav.shortener"
                    defaultMessage="Shortener"
                  />
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/login"
                  activeClassName="menu__link--selected"
                  className="menu__link"
                >
                  <FormattedMessage id="nav.login" defaultMessage="LogIn" />
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/sign-up"
                  activeClassName="menu__link--selected"
                  className="menu__link"
                >
                  <FormattedMessage id="nav.signup" defaultMessage="SignUp" />
                </NavLink>
              </li>
              <li className="menu__item">
                <Select
                  options={langOptions}
                  value={ui.lang}
                  onSelectOption={this.handleChangeLang}
                />
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth: authSelector(state),
  ui: uiSelector(state)
});

export default withRouter(
  connect(
    mapStateToProps,
    { logout, changeLanguage }
  )(Header)
);
