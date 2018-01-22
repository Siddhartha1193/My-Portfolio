import React, {Component} from 'react';



export default class Sidebar extends Component{
  render(){
    return(
      //begin .vcard

      <div className="span4 vcard pull-right">
        <div className="vcard-wrap">
  //-- begin .vcard-photo -->
          <div className="vcard-photo">
            <img src={require('../images/avatar.jpg')} alt="profile photo"/>
          </div>



          <div  className="vcard-bio">
            <h2  className="vcard-name">John Sunrise</h2>

            <hr/>

            <p>Amet purus nunc diam enim rhoncus. Dolor. Ut, elit, tempor auctor, integer porttitor cum scelerisque? Sociis pulvinar nascetur! Dolor platea! Phasellus adipiscing eu augue urna nunc odio sed nec odio?</p>

            <hr/>

    //
          <span  className="vcard-info"><i  className="icon-home"></i>Washington DC, USA</span><br/>
          <span  className="vcard-info"><i  className="icon-signal"></i>(555) 48 45698</span><br/>
          <span  className="vcard-info"><i  className="icon-globe"></i><a href="#">http://www.example.com/</a></span><br/>
          <span  className="vcard-info"><i  className="icon-envelope"></i><a href="mailto:example@example.com">john@sunrise.com</a></span><br/>
    //
          </div>

    //
      </div>
      </div>
    //
    )
  }
}
