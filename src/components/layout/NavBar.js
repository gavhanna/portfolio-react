import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import classnames from "classnames"

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isNavOpen: false
    }
  }

  closeNav = (e) => {
    this.setState({
      isNavOpen: false
    })
  }

  toggleNavOpen = e => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  render() {
    return (
      <React.Fragment>
        <div onClick={this.closeNav}
          className={classnames("close-nav", {
            "open": this.state.isNavOpen
          })}
        ></div>
        <nav id="nav">
          <div
            onClick={this.toggleNavOpen}
            className={classnames("nav-button", {
              "open": this.state.isNavOpen
            })}
          ></div>
          <div className="nav-wrapper">
            <div className="title">
              <span className="fancy-font">
                <NavLink activeClassName="active" to="/">GH</NavLink>
              </span>
            </div>
            <div
              className={classnames("nav-links", {
                "nav-on": this.state.isNavOpen
              })}
            >
              <span
                onClick={this.closeNav}
                className="nav-item">
                <NavLink activeClassName="active" to="/education">Education</NavLink>
              </span>
              <span
                onClick={this.closeNav}
                className="nav-item">
                <NavLink activeClassName="active" to="/projects">Projects</NavLink>
              </span>
              <span
                onClick={this.closeNav}
                className="nav-item">
                <NavLink activeClassName="active" to="/about">About</NavLink>
              </span>
              <span
                onClick={this.closeNav}
                className="nav-item">
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