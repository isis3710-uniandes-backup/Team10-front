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
               Estás intentando acceder a una funcionalidad de los usuarios registrados. Por favor, inicia sesión o regístrate para acceder a esta y a muchas funcionalidades más.
              </h4>
        }
      </div>
    );
  }
}

export default Home;