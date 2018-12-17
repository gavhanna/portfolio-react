import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ProjectsGridCard extends Component {
  render() {
    return (
      <Link className="project-card" to="/projects">

        <div className="card-image">
          <img src="http://fillmurray.com/200/200" alt="" />
        </div>
        <div className="card-body">
          <h3>Title</h3>
          <p>This is a project</p>
        </div>
      </Link>
    )
  }
}
