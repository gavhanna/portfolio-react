import React from 'react'

export default function ProjectsCard(props) {
  const { project } = props;
  return (
    <div className="project border-bottom">
      <h4>{project.title}</h4>
      <div className="links">
        <span className="project-link">
          <a target="_blank" rel="noopener noreferrer" href={project.link}>Live App</a>
        </span>
        <span className="project-link">
          <a target="_blank" rel="noopener noreferrer" href={project.github}>Github Link</a>
        </span>
      </div>
      {project.desc.map(desc => <p>{desc}</p>)}
      <div className="tech-used">
        {project.icons.map(icon => <i className={`${icon}`}></i>)}
      </div>
    </div>
  )
}
