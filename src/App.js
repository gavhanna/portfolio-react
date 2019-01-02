import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import About from './components/about/About';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import ProjectsGrid from './components/projects/ProjectsGrid';
import Project from './components/projects/Project';

import dBikes from "../src/img/dBikes.png";
import dontPanic from "../src/img/dontpanic.png";
import pomodoro from "../src/img/pomodoro.png"
import recipeBook from "../src/img/recipebook.png";
import simon from "../src/img/simon.png";
import xoxo from "../src/img/xoxo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          id: 1,
          title: "My Recipe Book",
          short: "Recipe based social network Progressive Web App",
          link: "https://recipebook-site.herokuapp.com/",
          img: recipeBook,
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
          id: 2,
          title: "Dublin Bikes App",
          short: "Dublin Bikes Progressive Web App",
          link: "https://dbikes-hub.herokuapp.com/",
          img: dBikes,
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
          id: 3,
          title: "DONT PANIC eCommerce Store",
          short: "eCommerce store built in Ruby on Rails",
          link: "https://dont-panic-shop.herokuapp.com/",
          img: dontPanic,
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
          id: 4,
          title: "Pomodoro Timer App",
          short: "Pomodoro App built using vanilla JavaScript and CSS",
          link: "https://gavhanna.github.io/pomodoro-timer/",
          img: pomodoro,
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
          id: 5,
          title: "Simon Game",
          short: "Simon Game clone built in vanilla JavaScript and CSS",
          link: "https://gavhanna.github.io/simon-game/",
          img: simon,
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
          id: 6,
          title: "Tic Tac Toe Game",
          short: "Tic Tac Toe game built in vanilla JavaScript and CSS. Implements a minimax algorithm.",
          link: "https://gavhanna.github.io/xoxo/",
          img: xoxo,
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
      <Router>
        <div className="App">
          <NavBar />
          <div id="wrapper">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/projects" render={() => (<ProjectsGrid projects={this.state.projects} />)} />
              <Route path="/project/:id" render={(props) => (<Project projects={this.state.projects} {...props} />)} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
