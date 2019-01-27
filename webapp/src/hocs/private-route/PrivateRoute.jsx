import React, { Component, Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import { checkAuth } from "../../actions/login";

const generateRoutes = (route, path) => {
  if (!route.routes) {
    return (
      <Route
        exact={route.exact}
        key={path}
        path={path}
        component={route.component}
      />
    );
  }

  return Object.entries(route.routes).map(([_, r]) =>
    generateRoutes(r, path + r.path)
  );
};

export class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isAuthenticated: true
    };
  }

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    const { isAuthenticated } = this.state;
    const { routes, notAuthenticated } = this.props;
    if (isAuthenticated) {
      return (
        <Fragment>
          {Object.entries(routes).map(([_, route]) =>
            generateRoutes(route, route.path)
          )}
        </Fragment>
      );
    } else {
      return <Redirect to={notAuthenticated} />;
    }
  }
}

export default connect(
  null,
  { checkAuth }
)(PrivateRoute);
