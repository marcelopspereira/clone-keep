import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { firebaseAuth } from "./constants/config";
import { PublicRoute, PrivateRoute, Container, Loading } from './components';
import Login from "./scenes/Login";
import Register from "./scenes/Register";
import Notes from "./scenes/Notes";
import Settings from "./scenes/Settings";
import Home from "./scenes/Home";

export default class App extends Component {
  state = {
    authed: false,
    loading: true
  };

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        });
      } else {
        this.setState({
          authed: false,
          loading: false
        });
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  render () {
    if (this.state.loading) {
      return (
        <Container>
          <Loading>Loading</Loading>
        </Container>
      );
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <Home authed={ this.state.authed } />} />
          <PublicRoute
            authed={this.state.authed}
            path="/login"
            component={Login}
          />
          <PublicRoute
            authed={this.state.authed}
            path="/register"
            component={Register}
          />
          <PrivateRoute
            authed={this.state.authed}
            path="/notes"
            component={Notes}
          />
          <PrivateRoute
            authed={this.state.authed}
            path="/settings"
            component={Settings}
          />
          <Route render={() => <h3>No Match</h3>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
