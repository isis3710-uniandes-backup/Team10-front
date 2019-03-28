import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col } from 'reactstrap';

export default class Restaurant extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Col xs = "3">
			 <Card>
		        <CardHeader tag="h3">Featured</CardHeader>
		        <CardBody>
		          <CardTitle>Special Title Treatment</CardTitle>
		          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
		          <Button>Go somewhere</Button>
		        </CardBody>
		      </Card>
		      </Col>
		);
	}
}
