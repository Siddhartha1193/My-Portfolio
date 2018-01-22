import React, { Component } from 'react';

import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Experience from './components/Experience.js';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="mirror-mode">
        <div className="App">

          <div className="container">
            <div className="row page-wrap">
              <Header/>
              <Sidebar/>

                <Experience/>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
