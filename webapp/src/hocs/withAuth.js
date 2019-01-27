import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authSelector } from "../reducers/login";
import { checkAuth } from "../api/login";

export default function withAuth(WrappedComponent, notAuthRoute) {
  class Auth extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: true,
        isAuthenticated: false
      };
    }

    async componentDidMount() {
      const { token } = this.props.auth;
      try {
        await checkAuth(token);
        this.setState({
          loading: false,
          isAuthenticated: true
        });
      } catch (err) {
        this.setState({
          loading: false,
          isAuthenticated: false
        });
      }
    }

    render() {
      const { isAuthenticated, loading } = this.state;
      if (loading) return null;

      if (isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Redirect to={notAuthRoute} />;
      }
    }
  }

  const mapStateToProps = state => ({
    auth: authSelector(state)
  });

  return connect(
    mapStateToProps,
    null
  )(Auth);
}
