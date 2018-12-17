import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import About from './components/layout/About';
import Education from './components/layout/Education';
import Projects from './components/layout/Projects';
import Contact from './components/layout/Contact';
import ProjectsGrid from './components/layout/ProjectsGrid';

class App extends Component {
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
              <Route exact path="/projects" component={ProjectsGrid} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
