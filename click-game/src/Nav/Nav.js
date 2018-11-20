import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render () { 
      return (
          <nav className="navbar">
              <h3 className="navbar" href="/">Futurama Clicker Game</h3>
              <p className="nav-item">{this.props.status}</p>
              <span className="navbar-text">Score: {this.props.score} | Highest score: {this.props.topScore}</span>
          </nav>
      )
  }
}

export default Nav;
