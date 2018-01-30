import React, { Component } from 'react';

import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Experience from './components/Experience.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import './index.css';

class App extends Component {
  render() {
    return (
        <div className="App">

          <div className="container">
            <div className="row page-wrap">
              <Header/>
              <Sidebar/>
              <div className="span8 main-wrap">
                <About/>
                <Experience/>
                <Education/>
                <Skills/>
                <Projects/>

              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default App;
