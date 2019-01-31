import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authSelector } from "../redux/selectors/auth";
import endpoints from "../config/endpoints";

export default function withAuth(WrappedComponent, notAuthRoute) {
  class Auth extends Component {
    state = {
      loading: true,
      isAuthenticated: false
    };

    async componentDidMount() {
      const { auth } = this.props;
      let authSuccess = true;

      //TODO: move this to a helper
      try {
        const response = await fetch(endpoints.checkAuth, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth}`
          }
        });
        if (response.status !== 204) authSuccess = false;
      } catch (error) {
        authSuccess = false;
      } finally {
        this.setState({
          loading: false,
          isAuthenticated: authSuccess
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
