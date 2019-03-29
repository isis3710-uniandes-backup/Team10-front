import React from 'react';
import Dish from './dish'
import {Container,Row} from 'reactstrap'

export default class DishesList extends React.Component {
	
	constructor(props) {
		super(props);
	}
	createDish = (dish) => <Dish dish={dish}/>;
	render() {
		return (
			<div className="scrollable2">
			<p><strong>Dishes:</strong></p>
			<Container>
				<Row>
					{this.props.dishes.map(this.createDish)}
				</Row>
			</Container>
			</div>
		);
	}
}