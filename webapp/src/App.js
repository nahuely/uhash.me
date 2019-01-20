import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./hocs/private-route/PrivateRoute";
import ErrorBoundary from "./components/error-boundary";
import Header from "./components/header";
import Footer from "./components/footer";
import routes from "./config/routes";
import "./app.scss";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <div className="app__header">
            <Header />
          </div>
          <div className="app__main">
            {Object.entries(routes.public).map(([routeName, route]) => (
              <Route
                exact={route.exact}
                key={routeName}
                path={route.path}
                component={route.component}
              />
            ))}
            <PrivateRoute routes={routes.private} notAuthenticated="/login" />
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
