import React, { Component } from "react";
import { NavLink, Route, Switch, Redirect} from "react-router-dom";

import "./Content.css";
import Home from "../pages/Home";
import About from "../pages/About";

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="navlinks">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/home">Home</NavLink>
        </div>
        <div className="page">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Redirect to='/about'/>
          </Switch>
        </div>
      </div>
    );
  }
}
