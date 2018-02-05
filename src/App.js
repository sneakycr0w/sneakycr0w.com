import React, { Component } from 'react';
import moment from 'moment';
import SocialIcon from './SocialIcon';
import me from './me.JPG';
import './App.css';

class App extends Component {
  state = {
    socials: [
      {
        alt: 'GitHub',
        icon: '',
        link: 'https://github.com/sneakycr0w',
      },
    ]
  }

  render() {
    return (
      <div className="container">
        <header>
          <img src={me} alt="Zachary Sohovich" className="profilePicture" />
          <h3>Zachary E Sohovich</h3>
          <h4>React Developer, Portland, OR</h4>
        </header>
        <section className="bio">
          <p>I am a {moment("19930601", "YYYYDDMM").fromNow(true)} old developer from Portland, OR. I like working with current technologies such as React, Node.js, MongoDB, and more.</p>
        </section>
        <section className="socials">
          {this.state.socials.map((social, index) => <SocialIcon alt={social.alt} link={social.link} key={index} />)}
        </section>
      </div>
    )
  }
}

export default App;
