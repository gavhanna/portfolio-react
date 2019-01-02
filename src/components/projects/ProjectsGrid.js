import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectsGridCard from './ProjectsGridCard';

export default class ProjectsGrid extends Component {
  render() {
    return (
      <section className="content-block projects" id="projects">
        <div className="top-block" id="about-title">
          <h3 className="fancy-font">Projects</h3>
        </div>
        <div className="project-cards">
          {
            this.props.projects.map(project =>
              <Link key={project.id} to={`/project/${project.id}`}>
                <ProjectsGridCard key={project.id} project={project} />
              </Link>
            )
          }
        </div>
      </section>
    )
  }
}
