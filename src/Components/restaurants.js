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
	getLoading(){
		return (<div className="loadingContainer"><div className="loading"></div></div>)
	}

	render() {
		return (
			<Container style={{'min-width':'100vw','margin':'0'}}>
				<Row>
					<Col xs="2"><Filter /></Col>
					<Col xs="10">{this.state.restaurants.length==0?this.getLoading():<RestaurantList restaurants={this.state.restaurants}/>}</Col>
				</Row>
			</Container>
		);
	}
}
