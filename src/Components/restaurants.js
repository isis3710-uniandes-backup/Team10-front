import React from 'react';
import Filter from './filter'
import RestaurantList from './restaurantList'
import {Container,Row,Col} from 'reactstrap';
const API = "http://localhost:3001/restaurants"

export default class Restaurants extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			"restaurants":[],
			"filter": {
				category: this.props.category ? this.props.category :'All',
				price: 100000,
				rating: 1
			}
		};
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
	onFilter = (filter)=>{
		this.setState({...this.state,"filter": filter})
	}

	render() {
		return (
			<Container style={{'min-width':'100vw','margin':'0'}}>
				<Row>
					<Col xs="4"><Filter onFilter = {this.onFilter} filter={this.state.filter}/></Col>
					<Col xs="8">{this.state.restaurants.length==0?this.getLoading():<RestaurantList filter={this.state.filter} restaurants={this.state.restaurants}/>}</Col>
				</Row>
			</Container>
		);
	}
}
