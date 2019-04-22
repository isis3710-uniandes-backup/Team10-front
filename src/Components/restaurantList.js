import React from 'react';
import Restaurant from './restaurant'
import {Container,Row} from 'reactstrap'

export default class RestaurantList extends React.Component {
	
	constructor(props) {
		super(props);
	}
	createRestaurant = (restaurant) => <Restaurant res={restaurant}/>;
	filtered = (restaurant) =>{
		if((this.props.filter.category==='All') || (this.props.filter.category === restaurant.category) )
			if(this.props.filter.price>=restaurant.avgPrice)
				if(this.props.filter.rating===restaurant.rating)
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
