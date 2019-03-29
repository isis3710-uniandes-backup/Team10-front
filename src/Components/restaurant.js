import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, CardImg } from 'reactstrap';
const divStyle = {
  'margin-top': '10px',
  border: '3px solid balck'
};
export default class Restaurant extends React.Component {

	constructor(props) {
		super(props);
	}
	getStars(){
		let ans = "";
		for(let i = 0; i<5; i++){
			if(i<this.props.res.rating)
				ans+="&#9733;"
			else
				ans+="&#9734;"
		}
		return ans;
	}

	render() {
		return (
			<Col lg = "3" md = "4" sm = "6" xs = "12">
			 <Card style={divStyle}>
		        <CardHeader tag="h3">{this.props.res.name}</CardHeader>
		                <CardImg top width="100%" src={this.props.res.image} alt={this.props.res.name} />
		        <CardBody>
		          <CardText><strong>Category: </strong>{this.props.res.category}</CardText>
		          <CardText><strong>Address: </strong>{this.props.res.address}</CardText>
		          <CardText><strong>Description: </strong> {this.props.res.description.substring(0,20)+"..."}</CardText>
		          <CardText><strong>Rating: </strong><span dangerouslySetInnerHTML={{__html:this.getStars()}}></span></CardText>
		          <Button>Menu</Button>
		        </CardBody>
		      </Card>
		      </Col>
		);
	}
}
