import React, { Component } from 'react'
import ProjectsCard from './ProjectsCard';

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          title: "My Recipe Book",
          link: "https://recipebook-site.herokuapp.com/",
          github: "https://github.com/gavhanna/nci-final-project",
          desc: [
            "Final project as part of the Higher Diploma in Science in Web Technologies, National College of Ireland.",
            "A full-stack PWA built with a node/express RESTful API using Mongoose and MongoDB on the backend, React + Redux on the front end. A social network focused around the creation and sharing of recipes, and the curation of a personal “Recipe Book”. ",
            "Test Login",
            "Email: test@test.com",
            "Password: 123456"
          ],
          icons: [
            "devicon-visualstudio-plain",
            "devicon-javascript-plain",
            "devicon-nodejs-plain-wordmark",
            "devicon-git-plain",
            "devicon-css3-plain",
            "devicon-webpack-plain",
            "devicon-react-original-wordmark",
            "devicon-mongodb-plain-wordmark",
            "devicon-git-plain-wordmark",
            "devicon-github-plain-wordmark",
            "devicon-bootstrap-plain-wordmark"
          ]
        },
        {
          title: "Dublin Bikes App",
          link: "https://dbikes-hub.herokuapp.com/",
          github: "https://github.com/gavhanna/dublin-bikes-MERN",
          desc: [
            "It allows users to view a google map of each Dublin Bike Station location. When a location is clicked, more information appears in an info box. Users can register and log in to save their favourite locations to quickly see if there are available bikes or spaces.",
            "This app was built as a learning exercise while studying the MERN stack. It implements a Redux store to manage state on the client site. On the server side, it uses Mongoose as an ORM.",
            "Test Login",
            "Email: test@test.com",
            "Password: 123456"
          ],
          icons: [
            "devicon-visualstudio-plain",
            "devicon-javascript-plain",
            "devicon-nodejs-plain-wordmark",
            "devicon-git-plain",
            "devicon-css3-plain",
            "devicon-webpack-plain",
            "devicon-react-original-wordmark",
            "devicon-mongodb-plain-wordmark",
            "devicon-git-plain-wordmark",
            "devicon-github-plain-wordmark",
            "devicon-bootstrap-plain-wordmark"
          ]
        },
        {
          title: "DONT PANIC eCommerce Store",
          link: "https://dont-panic-shop.herokuapp.com/",
          github: "https://github.com/gavhanna/dont-panic",
          desc: [
            "An eCommerce store built for a Server Side Web Tech class project in NCI",
            "It allows users to view store items, add and remove cart items and finalise purchases. Users can view a profile page with some information on their account including an order history. Admin users can grant and remove admin status to other users, add edit and delete store items.",
            "The app utilises a PostgresSQL database and is deployed on Heroku.",
            "Logins",
            "test@test.com - test123",
            "admin@admin.com - admin123"
          ],
          icons: [
            "devicon-visualstudio-plain",
            "devicon-javascript-plain",
            "devicon-ruby-plain",
            "devicon-git-plain",
            "devicon-css3-plain",
            "devicon-rails-plain",
            "devicon-heroku-original",
            "devicon-sass-original",
            "devicon-git-plain-wordmark",
            "devicon-github-plain-wordmark",
            "devicon-postgresql-plain"
          ]
        },
        {
          title: "Pomodoro Timer App",
          link: "https://gavhanna.github.io/pomodoro-timer/",
          github: "https://github.com/gavhanna/pomodoro-timer",
          desc: [
            "A Pomodoro Timer App built in vanilla JS.",
            "It allows users to set an amount of time to work and to take a break. Can be paused during a break or work session. Plays a small notification when a session is over and another begins.",
            "This app was built as part of the Free Code Camp's front end projects. It is hoted on github pages and was built using vanilla JS and CSS.",
          ],
          icons: [
            "devicon-javascript-plain",
            "devicon-git-plain",
            "devicon-css3-plain",
            "devicon-sass-original",
            "devicon-git-plain-wordmark",
            "devicon-github-plain-wordmark",
            "devicon-html5-plain",
            "devicon-ubuntu-plain"
          ]
        },
        {
          title: "Simon Game",
          link: "https://gavhanna.github.io/simon-game/",
          github: "https://github.com/gavhanna/simon-game",
          desc: [
            "A Simon Game App built in vanilla JS.",
            "It plays an incrementing number of coloured lights, accompanied by tones. The user has to remember and input the same sequence. If the user fails, the sequence is repeated. If playing on 'strict mode', the game resets on a failed attempt. The game ends after 20 rounds.",
            "This app was built as part of the Free Code Camp's front end projects. It is hoted on github pages and was built using vanilla JS and CSS.",
          ],
          icons: [
            "devicon-javascript-plain",
            "devicon-git-plain",
            "devicon-css3-plain",
            "devicon-sass-original",
            "devicon-git-plain-wordmark",
            "devicon-github-plain-wordmark",
            "devicon-html5-plain",
            "devicon-ubuntu-plain"
          ]
        },
        {
          title: "Tic Tac Toe Game",
          link: "https://gavhanna.github.io/xoxo/",
          github: "https://github.com/gavhanna/xoxo/",
          desc: [
            "A Tic Tac Toe Game App built in vanilla JS.",
            "Allows the user to play X's and O's against the computer.",
            "This app was built as part of the Free Code Camp's front end projects. It is hoted on github pages and was built using vanilla JS and CSS. It implements a minimax algorithm in order to decide the best course of action for the computer player.",
          ],
          icons: [
            "devicon-javascript-plain",
            "devicon-git-plain",
            "devicon-css3-plain",
            "devicon-sass-original",
            "devicon-git-plain-wordmark",
            "devicon-github-plain-wordmark",
            "devicon-html5-plain",
            "devicon-ubuntu-plain"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <section class="content-block projects" id="projects">
        <div class="top-block" id="about-title">
          <h3 class="fancy-font">Projects</h3>
        </div>
        <div class="bottom-block" id="projects-content">
          {
            this.state.list.map(project =>
              <ProjectsCard project={project} />
            )
          }
          <div className="project">
            <h4>Artist Portfolio Websites</h4>
            <p>A collection of websites made to the specifications of local Dublin based artists.</p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="https://alanjamesburns.com">AlanJames Burns | Artist</a>
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="http://littlewolf.ie">Little Wolf | Media</a>
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="http://michellehall.ie">Michelle Hall | Artist</a>
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="http://garyteeling.ie">Gary Teeling | Photographer</a>
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="http://patriciamckenna.ie">Patricia McKenna | Artist</a>
            </p>
            <div className="tech-used">
              <i className="devicon devicon-javascript-plain"></i>
              <i className="devicon devicon-html5-plain"></i>
              <i className="devicon devicon-gulp-plain"></i>
              <i className="devicon devicon-sass-original"></i>
              <i className="devicon devicon-git-plain"></i>
              <i className="devicon devicon-css3-plain"></i>
              <i className="devicon devicon-jquery-plain-wordmark"></i>
              <i className="devicon devicon-ubuntu-plain"></i>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
