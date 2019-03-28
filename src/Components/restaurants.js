import React from 'react';
import Filter from './filter'
import RestaurantList from './restaurantList'
import {Container,Row,Col} from 'reactstrap';
const API = "http://localhost:3001/restaurants"

export default class Restaurants extends React.Component {
	constructor(props) {
		super(props);
		this.state = {"restaurants":[]};
	}
	getRestaurants(){
		fetch(API)
		.then(response => response.json())
		.then(data => this.setState({...this.state,"restaurants": data}));
	}
	componentDidMount(){
		this.getRestaurants()
	}

	render() {
		return (
			<Container>
				<Row>
					<Col xs="2"><Filter /></Col>
					<Col xs="10"><RestaurantList restaurants={this.state.restaurants}/></Col>
				</Row>
			</Container>
		);
	}
}
