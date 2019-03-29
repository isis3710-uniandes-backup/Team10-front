import React from 'react';
import Navigation from './Components/navigation'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Components/home'
import Categories from './Components/categories'
import Restaurants from './Components/restaurants'
import Discounts from './Components/discounts'
import NewRestaurant from './Components/newRestaurant'
import Account from './Components/account'


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: 'All'
		}
	}
	onClick = (str)=>{
		//console.log(str);
		this.setState({category: str})
	}
	render() {
		return (
			<div>
			<Router>
				<Navigation onClick = {this.onClick}/>
				<Switch>
					<Route exact path='/' render={() => <Restaurants category={this.state.category} />} />
					<Route exact path='/discounts' component={Discounts} />
					<Route exact path='/new' component={NewRestaurant} />
					<Route exact path='/you' component={Account} />
				</Switch>
			</Router>
			</div>
		);
	}
}
