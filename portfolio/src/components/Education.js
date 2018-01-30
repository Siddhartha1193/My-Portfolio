import React, {Component} from 'react';

export default class Education extends Component{
  render(){
    return(
      <div className="section section-about section-first row">
        <h3  className="css3-gradient-2">Education</h3>

        <div class="section-education-list row-fluid">
					<div class=" education-item">
            <ul class="university-list fa-ul">
              <li><h4><span class="fa-li"><i class="fas fa-university"></i></span>San Francisco State University</h4></li>
              <li><h5><span class="fa-li"><i class="fas fa-graduation-cap"></i></span>Master of Science in Computer Science</h5></li>
              <li><h5><span class="fa-li"><i class="far fa-calendar-alt"></i></span>August 2014 - December 2017</h5></li>
            </ul>
          </div>
        </div>
          <br/>
        <div class="section-education-list row-fluid">
          <div class=" education-item">
            <ul class="university-list fa-ul">
              <li><h4><span class="fa-li"><i class="fas fa-university"></i></span>Jawaharlal Nehru Technological University</h4></li>
              <li><h5><span class="fa-li"><i class="fas fa-graduation-cap"></i></span>Bachelor of Technology in Information Technology</h5></li>
              <li><h5><span class="fa-li"><i class="far fa-calendar-alt"></i></span>October 2010 - May 2014</h5></li>
            </ul>
          </div>
        </div>
          
      </div>
      )
    }
  }
