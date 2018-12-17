import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="close-nav"></div>
        <nav id="nav">
          <div className="nav-button"></div>
          <div className="nav-wrapper">
            <div className="title">
              <span className="fancy-font">
                <NavLink activeClassName="active" to="/">GH</NavLink>
              </span>
            </div>
            <div className="nav-links">
              <span className="nav-item">
                <NavLink activeClassName="active" to="/education">Education</NavLink>
              </span>
              <span className="nav-item">
                <NavLink activeClassName="active" to="/projects">Projects</NavLink>
              </span>
              <span className="nav-item">
                <NavLink activeClassName="active" to="/about">About</NavLink>
              </span>
              <span className="nav-item">
                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
              </span>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default NavBar;