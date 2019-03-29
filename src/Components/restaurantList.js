import React from 'react';
import Restaurant from './restaurant'
import {Container,Row} from 'reactstrap'

export default class RestaurantList extends React.Component {
	
	constructor(props) {
		super(props);
	}
	createRestaurant = (restaurant) => <Restaurant res={restaurant}/>;
	render() {
		return (
			<div className="scrollable">
			<Container>
				<Row>
					{this.props.restaurants.map(this.createRestaurant)}
				</Row>
			</Container>
			</div>
		);
	}
}
