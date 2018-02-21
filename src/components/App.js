import React, { Component } from 'react';
import moment from 'moment';
import { Container, Segment, Button, Icon, Header, Image } from 'semantic-ui-react';
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
          icon: 'github alternative'
        },
        {
          name: 'Contact',
          link: 'mailto:zach@sneakycr0w.com?subject=sup',
          icon: 'mail'
        },
        {
          name: 'Resume',
          link: 'https://www.linkedin.com/in/zachary-sohovich',
          icon: 'linkedin'
        }
      ]
    };
  }

  render() {
    return (
      <Container className="container">
        <Image src={me} alt="Zachary E Sohovich" size="small" circular centered />
        <Header as="h1">Zachary E Sohovich</Header>
        <Header as="h4">React Developer in Portland, OR</Header>
        <Segment textAlign="center" padded>
            I am a {moment('19930601', 'YYYYDDMM').fromNow(true)} old developer
            from Portland, OR. I like working with current technologies such as
            React, Node.js, MongoDB, and more.
        </Segment>
        {this.state.socials.map(social => (
          <Button key={social.name} href={social.link} className="button">
            <Icon name={social.icon} /> <span>{social.name}</span>
          </Button>
        ))}
      </Container>
    );
  }
}

export default App;
