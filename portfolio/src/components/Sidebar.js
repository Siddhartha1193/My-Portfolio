import React, {Component} from 'react';



export default class Sidebar extends Component{
  render(){
    return(
      //begin .vcard

      <div className="span4 vcard pull-right">
        <div className="vcard-wrap">

          <div className="vcard-photo">
            <img src={require('../images/avatar.jpg')} alt="profile photo" title="My Photo"/>
          </div>



          <div  className="vcard-bio">
            <h3  className="vcard-name">Siddhartha Sankasala</h3>

            <br/>

            <ul className = "list unstyled vcard-contact">
              <li className="list-item vcard-contact-address"><i class="fa fa-home fa-2x span v2" aria-hidden="true"></i><t/>&nbsp; &nbsp;
                <h5 className="spanv10">San Francisco, CA, USA</h5>
              </li>
              <li className="list-item vcard-contact-phone"><i class="fa fa-phone fa-2x span v2" aria-hidden="true"></i><t/>&nbsp; &nbsp;
                <h5 className="spanv10">(415)-316-3347</h5>
              </li>
              <li className="list-item vcard-contact-email"><i class="fa fa-envelope fa-2x spanv2" aria-hidden="true"></i><t/>&nbsp; &nbsp;
                <h5 className="spanv8"><a href="mailto: ssankasa@mail.sfsu.edu" title="Email me">ssankasa@mail.sfsu.edu</a></h5>
              </li>
            </ul>

            <br/>

            <h4 className="vcard-social"> Connect </h4>
            <ul className ="list-inline">
              <li className="list-inline-item list-social-media-linkedin">
                <a href="https://www.linkedin.com/in/siddharthasankasala/" target="_blank" title="LinkedIn">
                  <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item list-social-media-github">
                <a href="https://www.linkedin.com/in/siddharthasankasala/" target="_blank" title="GitHub">
                  <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item list-social-media">
                <a href="https://www.linkedin.com/in/siddharthasankasala/" target="_blank" title="LinkedIn">
                  <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                </a>
              </li>

          </ul>

        <br/>
          <a className="github-button btn btn-primary btn-lg" href="https://github.com/Siddhartha1193" data-size="large" aria-label="Follow @Siddhartha1193 on GitHub">Follow @Siddhartha1193</a>

          <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="siddharthasankasala">
            <a className="LI-simple-link" href='https://www.linkedin.com/in/siddharthasankasala?trk=profile-badge'>Siddhartha Sankasala</a>
          </div>

          </div>


      </div>
      </div>
    //
    )
  }
}
