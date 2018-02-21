import React, { Component } from 'react';
import moment from 'moment';
import { Icon, Button } from 'reactbulma';
import me from '../assets/me.JPG';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      socials: [
        {
          name: 'Code',
          link: 'https://github.com/sneakycr0w',
          icon: 'fab fa-github'
        },
        {
          name: 'Contact',
          link: 'mailto:zach@sneakycr0w.com',
          icon: 'far fa-paper-plane'
        },
        {
          name: 'Resume',
          link: 'https://www.linkedin.com/in/zachary-sohovich',
          icon: 'fab fa-linkedin'
        }
      ]
    };
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
          <p>
            I am a {moment('19930601', 'YYYYDDMM').fromNow(true)} old developer
            from Portland, OR. I like working with current technologies such as
            React, Node.js, MongoDB, and more.
          </p>
          {this.state.socials.map(social => (
            <Button as="a" key={social.name} href={social.link} className="button">
              <Icon small>
                <i className={social.icon} />
              </Icon>
              <span>{social.name}</span>
            </Button>
          ))}
        </section>
        <footer>
          <p className="small">
            Coded with <Icon small danger><i className="far fa-heart" /></Icon> on <a href="https://github.com/sneakycr0w/sneakycr0w.com">Github</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
