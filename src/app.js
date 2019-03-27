import React from 'react';
import Navigation from './Components/navigation'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/home'
import Categories from './Components/categories'
import Restaurants from './Components/restaurants'
import Promotions from './Components/promotions'
import NewRestaurant from './Components/newRestaurant'
import Account from './Components/account'


export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div>
					<Navigation />
				</div>
				<Switch>
					<Route exact path='/categories' component={Categories} />
					<Route exact path='/' component={Restaurants} />
					<Route exact path='/promotions' component={Promotions} />
					<Route exact path='/new' component={NewRestaurant} />
					<Route exact path='/you' component={Account} />
				</Switch>
			</Router>
		);
	}
}
