import React, { Component } from 'react'
import EducationCard from './EducationCard';

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          year: "2018 - 2019",
          school: "National College of Ireland",
          cert: "Higher Diploma in Science in Web Technologies"
        },
        {
          year: "2018",
          school: "Udemy",
          cert: "MERN Stack Front to Back"
        },
        {
          year: "2017",
          school: "Udemy",
          cert: "Complete Angular2 and TypeScript Course"
        },
        {
          year: "2016",
          school: "FreeCodeCamp",
          cert: "Obtained Front End Developer Certificate"
        },
        {
          year: "2015 - 2016",
          school: "IBAT College Dublin",
          cert: "Intruduction to Programming in Java",
          extra: "Pass with distinction"
        },
        {
          year: "2013 - 2014",
          school: "UCD",
          cert: "Access to Science and Engineering (Level 6)",
          extra: "Final project in Nuclear Physics"
        },
      ]
    }
  }

  render() {
    return (
      <section class="content-block education" id="education">
        <div class="left-block">
          <h3 class="fancy-font">Education</h3>
        </div>
        <div class="right-block">
          {
            this.state.list.map(item =>
              <EducationCard info={item} />
            )
          }
        </div>
      </section>
    )
  }
}
