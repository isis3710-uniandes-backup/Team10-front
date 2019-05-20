import React, { Component } from 'react';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
              <h4>
               Por favor haga Log In para acceder a esta funcionalidad.
              </h4>
        }
      </div>
    );
  }
}

export default Home;