import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Contact from "./pages/contact.jsx";

export default class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/contact" exact component={() => <Contact />} />
            <Route path="/portfolio" exact component={() => <Portfolio />} />
          </Switch>
      </Router>
    );
  }
}
