import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Container,Row,Col} from 'reactstrap';
import DishesList from './dishesList';
const API = "http://localhost:3001/dishes"

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"dishes":[]
		};
	}
	getDishes(){
		fetch(API)
		.then(response => response.json())
		.then(data => this.setState({...this.state,"dishes": data}));
	}
	componentDidMount(){
		this.getDishes()
	}
	getLoading(){
		return (<div className="loadingContainer"><div className="loading"></div></div>)
	}
	filtered = (dish) => {
		return dish.restaurantId === this.props.res.id;
	}
	render() {
		return (
			<Container style={{'min-width':'70vw' ,'margin':'0'}}>
				<Row>
					<Col xs="4">
						<p><strong><FormattedMessage id="Description: "/></strong>{this.props.res.description}</p>
						<p><strong><FormattedMessage id="Average Price: "/></strong>{this.props.res.avgPrice}</p>
					</Col>
					<Col xs = "8">
						{this.state.dishes.length==0?this.getLoading():<DishesList dishes={this.state.dishes.filter(this.filtered)}/>}
					</Col>
				</Row>
			</Container>
		);
	}
}
