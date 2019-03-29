import React from 'react';
import Navigation from './Components/navigation'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/home'
import Categories from './Components/categories'
import Restaurants from './Components/restaurants'
import Discounts from './Components/discounts'
import NewRestaurant from './Components/newRestaurant'
import Account from './Components/account'


export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<Router>
				<Navigation />
				<Switch>
					<Route exact path='/categories' component={Categories} />
					<Route exact path='/' component={Restaurants} />
					<Route exact path='/discounts' component={Discounts} />
					<Route exact path='/new' component={NewRestaurant} />
					<Route exact path='/you' component={Account} />
				</Switch>
			</Router>
			</div>
		);
	}
}
