import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about.jsx'
import Home from './pages/home.jsx'
import Portfolio from './pages/portfolio.jsx'
import Contact from './pages/contact.jsx'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}

