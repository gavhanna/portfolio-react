import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <section className="content-block about" id="about">
        <div className="top-block" id="about-title">
          <h3 className="fancy-font">About Me</h3>
        </div>
        <div className="bottom-block" id="about-content">
          <p>Having spent two years teaching myself web development using resources available online, I am
              currently enrolled
              in Higher Diploma in Science in Web Technologies in National College of Ireland. Looking for a
              junior/intern
              position. I am a dedicated and driven self-learner, eager to be involved in the constantly evolving
              world
              of web development.
                </p>
        </div>
      </section>
    )
  }
}

export default About;