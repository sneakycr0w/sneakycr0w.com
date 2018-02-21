import React, { Component } from 'react';
import moment from 'moment';
import { Icon, Button, Section, Container, Title, SubTitle } from 'reactbulma';
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
        <Section>
          <img src={me} alt="Zachary Sohovich" className="profilePicture" />
          <Title>
            Zachary E Sohovich
          </Title>
          <SubTitle>
            React Developer in Portland, OR
          </SubTitle>
          <Container className="bio">
              I am a {moment('19930601', 'YYYYDDMM').fromNow(true)} old developer
              from Portland, OR. I like working with current technologies such as
              React, Node.js, MongoDB, and more.
          </Container>
          {this.state.socials.map(social => (
            <Button as="a" key={social.name} href={social.link} className="button">
              <Icon small>
                <i className={social.icon} />
              </Icon>
              <span>{social.name}</span>
            </Button>
          ))}
          <p style={{ margin: '1%' }}>
            Coded with <Icon small><i style={{ color: 'red' }} className="far fa-heart" /></Icon> on <a href="https://github.com/sneakycr0w/sneakycr0w.com">Github</a>
          </p>
        </Section>
      </div>
    );
  }
}

export default App;
