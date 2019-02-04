import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import messages_es from "./translations/es.json";
import messages_en from "./translations/en.json";
import { uiSelector } from "./redux/selectors/ui";
import ErrorBoundary from "./components/error-boundary";
import Header from "./components/header";
import Footer from "./components/footer";
import routes from "./config/routes";
import history from "./helpers/history";
import withAuth from "./hocs/withAuth";
import "./app.scss";

const messages = {
  en: messages_en,
  es: messages_es
};

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

class App extends Component {
  render() {
    const { ui } = this.props;
    const lang = ui.lang;
    return (
      <ErrorBoundary>
        <IntlProvider locale={lang} messages={messages[lang]}>
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
        </IntlProvider>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = state => ({
  ui: uiSelector(state)
});

export default connect(
  mapStateToProps,
  null
)(App);
