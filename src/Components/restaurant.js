import React from 'react';
import Menu from './menu';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, CardImg, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
const divStyle = {
  'margin-top': '10px',
  border: '3px solid balck'
};
export default class Restaurant extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
      		modal: false
    	};

    	this.toggle = this.toggle.bind(this);
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
	toggle() {
    	this.setState(prevState => ({
      	modal: !prevState.modal
    	}));
  	}
	render() {
		return (
			<Col lg = "3" md = "4" sm = "6" xs = "12">
			 <Card style={divStyle}>
		        <CardHeader tag="h1">{this.props.res.name}</CardHeader>
		                <CardImg top width="100%" src={this.props.res.image} alt={this.props.res.name} />
		        <CardBody>
		          <CardText><strong>Category: </strong>{this.props.res.category}</CardText>
		          <CardText><strong>Address: </strong>{this.props.res.address}</CardText>
		          <CardText><strong>Description: </strong> {this.props.res.description.substring(0,20)+"..."}</CardText>
		          <CardText><strong>Rating: </strong><span dangerouslySetInnerHTML={{__html:this.getStars()}}></span></CardText>
		          <Button onClick={this.toggle}>Menu</Button>
		        </CardBody>
		      </Card>
		      <Modal style={{'min-width':'70vw','margin-top':'0'}} isOpen={this.state.modal} toggle={this.toggle}>
		          <ModalHeader toggle={this.toggle}>{"Menu - "+this.props.res.name}</ModalHeader>
		          <ModalBody>
		          	<Menu res = {this.props.res} />
		          </ModalBody>
		       </Modal>
		    </Col>
		);
	}
}
