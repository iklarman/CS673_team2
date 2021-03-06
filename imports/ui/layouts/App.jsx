import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

// App component - represents the whole app
export default class App extends Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '303809510001753',
        xfbml      : true,
        version    : 'v2.7'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <div className="">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo"><img src="/logo_s.svg"/>MeetCute</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="Landing#">Landing</Link></li>
              <li><Link to="Discover">Discover</Link></li>
              <li><Link to="Message">Message</Link></li>
              <li><Link to="Profile">My Profile</Link></li>
              <li><Link to="Document">Document</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="Landing#">Landing</Link></li>
              <li><Link to="Discover">Discover</Link></li>
              <li><Link to="Message">Message</Link></li>
              <li><Link to="Profile">My Profile</Link></li>
              <li><Link to="Document">Document</Link></li>
            </ul>
          </div>
        </nav>


        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
