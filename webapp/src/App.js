import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import Header from "./components/header";
import Footer from "./components/footer";
import Shortener from "./views/shortener/Shortener";
import "./app.scss";

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="app">
          <div className="app__header">
            <Header />
          </div>
          <div className="app__main">
            <Switch>
              <Route exact path="/" component={Shortener} />
              <Route path="/stats" render={() => <div>/stats</div>} />
              <Route path="/about-us" component={() => <div>/about-us</div>} />
              <Route render={() => <div>/not found</div>} />
            </Switch>
          </div>
          <div className="app__footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
