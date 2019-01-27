import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import Header from "./components/header";
import Footer from "./components/footer";
import routes from "./config/routes";
import history from "./helpers/history";
import withAuth from "./hocs/withAuth";
import "./app.scss";

const generateRoutes = (route, path) => {
  if (!route.routes) {
    return (
      <Route
        exact={route.exact}
        key={path}
        path={path}
        component={withAuth(route.component, "/login")}
      />
    );
  }

  return Object.entries(route.routes).map(([_, r]) =>
    generateRoutes(r, path + r.path)
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <Router history={history}>
        <div className="app">
          <div className="app__header">
            <Header />
          </div>
          <div className="app__main">
            <Switch>
              {Object.entries(routes.public).map(([routeName, route]) => (
                <Route
                  exact={route.exact}
                  key={routeName}
                  path={route.path}
                  component={route.component}
                />
              ))}
              {Object.entries(routes.private).map(([_, route]) =>
                generateRoutes(route, route.path)
              )}
              <Route
                render={() => (
                  <div>
                    <p>not found</p>
                  </div>
                )}
              />
            </Switch>
          </div>
          <div className="app__footer">
            <Footer />
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
