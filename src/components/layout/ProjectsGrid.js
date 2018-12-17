import React, { Component } from 'react'
import ProjectsGridCard from './ProjectsGridCard';

export default class ProjectsGrid extends Component {
  render() {
    return (
      <section class="content-block projects" id="projects">
        <div class="top-block" id="about-title">
          <h3 class="fancy-font">Projects</h3>
        </div>
        <div className="project-cards">
          <ProjectsGridCard />
          <ProjectsGridCard />
          <ProjectsGridCard />
        </div>
      </section>
    )
  }
}
