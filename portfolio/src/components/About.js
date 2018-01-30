import React, {Component} from 'react';

export default class About extends Component{
  render(){
    return(
      <div className="section section-about section-first row">
        <h3  className="css3-gradient-2">About Me</h3>
          <h4> Software Developer | CS Graduate | San Francisco </h4><br/>
          <ul className="about-list fa-ul">
            <li><span className="fa-li"><i className="fas fa-check-square "></i></span>Well versed with JavaScript, ReactJS, Android Development, React Native, NodeJS</li>
            <li><span className="fa-li"><i className="fas fa-check-square "></i></span>Worked extensively with Oject Oriented Methodologies, SQL and NoSQL databases</li>
            <li><span className="fa-li"><i className="fas fa-check-square "></i></span>Worked in environments that follow Agile Software Developement and Scrum</li>
            <li><span className="fa-li"><i className="fas fa-check-square "></i></span>Passionate about learning and adapting to new technologies</li>
            <li><span className="fa-li"><i className="fas fa-check-square "></i></span>Currently seeking new opportunities as a Software Developer</li>
          </ul>
      </div>
      )
    }
  }
