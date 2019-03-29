import React from 'react';

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Filter extends React.Component {

	constructor(props) {
		super(props);
	}
	filter = (e)=>{
		e.preventDefault();
		//if(!isNaN() && <0){
		//	alert("Error en el input")
		//}
		//else{
		//	this.props.
		//}
	}
	render() {
		return (
			<div>
				<h4 style={{'text-align':'center'}}>
					Filter
				</h4>
				<Form onSubmit={this.filter}>
			        <FormGroup row>
			          <Label sm={4}>Price</Label>
			          <Col sm={8}>
			            <Input type="number" name="max" id="max" placeholder="max" />
			          </Col>
			        </FormGroup>
			        <FormGroup row>
			          <Label sm={4}>Category</Label>
			          <Col sm={8}>
			            <Input type="select" name="category" id="category">
			            	<option>All</option>
			            	<option>Fast Food</option>
			            	<option>Maxican</option>
				            <option>Chinese</option>
				            <option>Typical</option>
				            <option>Fancy</option>
				        </Input>
			          </Col>
			        </FormGroup>
			        <FormGroup row>
			          <Label sm={4}>Rating</Label>
			          <Col sm={8}>
			            <Input type="select" name="rating" id="rating">
			            	<option>0</option>
			            	<option>1</option>
				            <option>2</option>
				            <option>3</option>
				            <option>4</option>
				            <option>5</option>
				        </Input>
			          </Col>
			        </FormGroup>
			        <Button type='submit' style = {{'float':'right'}}>Submit</Button>
			      </Form>
			</div>
		);
	}
}
