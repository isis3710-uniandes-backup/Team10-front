import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, CardImg, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
const divStyle = {
  'margin-top': '10px',
  border: '3px solid balck'
};
export default class Dish extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Col lg = "6">
			 <Card style={divStyle}>
		        <CardHeader tag="h3">{this.props.dish.name}</CardHeader>
		                <CardImg top height="40%" src={this.props.dish.image} alt={this.props.dish.name} />
		        <CardBody>
		          <CardText><strong>Description: </strong> {this.props.dish.description.substring(0,20)+"..."}</CardText>
		          <CardText><strong>Price: </strong> {this.props.dish.price}</CardText>
		        </CardBody>
		      </Card>
		    </Col>
		);
	}
}