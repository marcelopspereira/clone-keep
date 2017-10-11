import React, { Component } from 'react';

import { logout } from "../helpers/auth";
import { Container, Title, NavButton, Button } from '../components';

export default class Home extends Component {
  render () {
    const { authed } = this.props;

    return (
      <Container padding={80} align="flex-start" showBackground>
        <Title color="primary">The last note app<br/>you will ever need</Title>

        { !authed &&
          <div>
            <NavButton to="/login" mode="primary" glow>Login</NavButton>
            <NavButton to="/register" mode="light">Sign up</NavButton>
          </div>
        }

        {
          authed &&
          <div>
            <NavButton to="/notes" mode="primary" glow>See my notes</NavButton>
            <Button onClick={logout} mode="light">Logout</Button>
          </div>
        }
      </Container>
    )
  }
}
