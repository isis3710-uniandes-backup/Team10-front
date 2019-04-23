import React from 'react';
import Menu from './menu';
import {FormattedMessage} from 'react-intl';
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
	getName(){
		return this.props.res.name.substring(0,10)
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
		        <CardHeader tag="h2">{this.getName()}</CardHeader>
		                <CardImg top width="100%" src={this.props.res.image} alt={this.getName()} />
		        <CardBody>
		          <CardText><strong><FormattedMessage id="Category: "/></strong><FormattedMessage id={this.props.res.category}/></CardText>
		          <CardText><strong><FormattedMessage id="Address: "/></strong>{this.props.res.address}</CardText>
		          <CardText><strong><FormattedMessage id="Description: "/></strong> {this.props.res.description.substring(0,20)+"..."}</CardText>
		          <CardText><strong><FormattedMessage id="Rating: "/></strong><span dangerouslySetInnerHTML={{__html:this.getStars()}}></span></CardText>
		          <Button onClick={this.toggle}>Menu</Button>
		        </CardBody>
		      </Card>
		      <Modal style={{'min-width':'70vw','margin-top':'0'}} isOpen={this.state.modal} toggle={this.toggle}>
		          <ModalHeader tag="h3" toggle={this.toggle}>{"Menu - "+this.props.res.name}</ModalHeader>
		          <ModalBody>
		          	<Menu res = {this.props.res} />
		          </ModalBody>
		       </Modal>
		    </Col>
		);
	}
}
