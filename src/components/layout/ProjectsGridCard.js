import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ProjectsGridCard extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="project-card">

        <div className="card-image">
          <img src="http://fillmurray.com/200/200" alt="" />
        </div>
        <div className="card-body">
          <h3>{project.title}</h3>
          <p>{project.short}</p>
        </div>
      </div>
    )
  }
}
