import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './app';
import Profile from './Profile/Profile';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Home from './Home/Home';
import Categories from './Components/categories';
import Restaurants from './Components/restaurants';
import Discounts from './Components/discounts';
import NewRestaurant from './Components/newRestaurant';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/accessDenied" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/restaurants" render={(props) => <Restaurants auth={auth} {...props} />} />
          <Route path="/discounts" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/accessDenied"/>
            ) : (
              <Discounts auth={auth} {...props} />
            )
          )} />
          <Route path="/new" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/accessDenied"/>
            ) : (
              <NewRestaurant auth={auth} {...props} />
            )
          )} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>        
        </div>
      </Router>
  );
}