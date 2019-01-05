import React, { Component } from 'react';

export default class Project extends Component {
  constructor() {
    super();
    this.state = {
      projectFound: false,
      project: {}
    }
  }

  componentDidMount() {
    const projects = this.props.projects;
    const paramId = this.props.match.params.id;
    projects.forEach(p => {
      if (p.id === parseInt(paramId)) {
        this.setState({ projectFound: true })
      }
    })
    this.setState({
      project: this.props.projects.filter(p => p.id === parseInt(this.props.match.params.id))[0]
    })
  }

  render() {
    const { project } = this.state
    const noProject = (
      <section className="content-block projects" id="projects">
        <div className="top-block" id="about-title">
          <h3 className="fancy-font">Project not found</h3>
        </div>
      </section>
    )


    return (
      <React.Fragment>
        {
          this.state.projectFound ?
            <section className="content-block projects" id="projects">
              <div className="top-block" id="about-title">
                <h3 className="fancy-font">{project.title}</h3>
              </div>
              <div className="image">
                <img className="project-img" src={project.img} alt="" />
              </div>
              <div className="links">
                <span className="project-link">
                  <a target="_blank" rel="noopener noreferrer" href={project.link}>Live App</a>
                </span>
                <span className="project-link">
                  <a target="_blank" rel="noopener noreferrer" href={project.github}>Github Link</a>
                </span>
              </div>
              <div className="project-cards">
                {
                  project.desc.map((desc, i) =>
                    <p key={i}>{desc}</p>
                  )
                }
              </div>
              <div className="tech-used">
                {project.icons.map((icon, i) => <i key={i} className={`${icon}`}></i>)}
              </div>
            </section> :
            noProject
        }
      </React.Fragment>
    )
  }
}
