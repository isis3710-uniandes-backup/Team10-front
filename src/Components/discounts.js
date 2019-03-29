import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DiscountsList from './discountsList'
const API = "http://localhost:3001/promotions"

export default class Discounts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {"discounts":[]};
	}
	getDiscounts(){
		fetch(API)
		.then(response => response.json())
		.then(data => this.setState({...this.state,"discounts": data}));
	}
	componentDidMount(){
		this.getDiscounts()
	}
	
	render() {
		let promotions = this.state.discounts.map(discounts =>{
			return(
				<Col sm = "2">
			      <DiscountsList discounts ={discounts}/>
			    </Col>
				)
		})
		return (
			<Container fluid>
			  <Row>
			    {promotions}
			  </Row>
			</Container>
		);
	}
}
