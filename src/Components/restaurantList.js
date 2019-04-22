import React from 'react';
import Restaurant from './restaurant'
import {Container,Row} from 'reactstrap'

export default class RestaurantList extends React.Component {
	
	constructor(props) {
		super(props);
	}
	translate(s) {
		switch(s){
			case 'Mejicana':
				return 'Mexican'
			case 'Todos':
				return 'All'
			case 'China':
				return 'Chinese'
			case 'Lujo':
				return 'Fancy'
			case 'Tipica':
				return 'Typical'
			case 'Comida Rapida':
				return 'Fast food'
			default :
				return s
		}
	}
	createRestaurant = (restaurant) => <Restaurant res={restaurant}/>;
	filtered = (restaurant) =>{
		console.log(this.props.filter,restaurant)
		if((this.translate(this.props.filter.category)==='All') || (this.translate(this.props.filter.category) === restaurant.category) )
			if(this.props.filter.price>=restaurant.avgPrice)
				if(this.props.filter.rating==restaurant.rating)
					return true;
		return false;
	}
	render() {
		return (
			<div className="scrollable">
			<Container>
				<Row>
					{this.props.restaurants.filter(this.filtered).map(this.createRestaurant)}
				</Row>
			</Container>
			</div>
		);
	}
}
