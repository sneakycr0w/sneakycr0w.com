import React, { Component } from 'react';
import moment from 'moment';
import { Icon, Button } from 'antd';
import ContactForm from './ContactForm';
import me from '../assets/me.JPG';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      socials: [
        {
          name: 'Github',
          link: 'https://github.com/sneakycr0w',
        },
        {
          name: 'Mail',
          link: 'mailto:zach@sneakycr0w.com'
        }
      ]
    }
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
          {this.state.socials.map((social, index) => (
            <Button href={social.link} type="primary" style={{ margin: "5px" }} key={index}>
              <Icon type={social.name.toLowerCase()} key={index} /> {social.name}
            </Button>
          ))}
        </section>
      <ContactForm />
      </div>
    )
  }
}

export default App;
