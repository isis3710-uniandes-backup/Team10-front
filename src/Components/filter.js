import React from 'react';
import {FormattedMessage} from 'react-intl';

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Filter extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.filter) {
            this.state = {
                category: this.props.filter.category,
                price: this.props.filter.price,
                rating: this.props.filter.rating
            }
        } else {
            this.state = {
                category: 'All',
                price: '',
                rating: 0
            }
        }
    }
    filter = (e) => {
        e.preventDefault();
        if (!isNaN(this.state.price) && this.state.price < 0) {
            alert("Error en el input")
        } else {
            this.props.onFilter(this.state)
        }
    }
    render() {
        return (
                <div>
                    <h4 style={{'text-align': 'center'}}>
                        <FormattedMessage id="Filter"/>
                    </h4>
                    <Form onSubmit={this.filter}>
                        <FormGroup row>
                            <Label sm={4}><FormattedMessage id="Price"/></Label>
                            <Col sm={8}>
                            <Input type="number" name="max" aria-label="Price Input" min="0" id="max" placeholder="max" value={this.state.price}
                                   onChange={e => this.setState({price: e.target.value})}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={4}><FormattedMessage id="Category"/></Label>
                            <Col sm={8}>
                            <Input type="select" name="category" aria-label="Category Input" id="category" value={this.state.category} 
                                   onChange={e => this.setState({category: e.target.value})}>
                            <FormattedMessage id="All">{placeholder => <option>{placeholder}</option>}</FormattedMessage>
                            <FormattedMessage id="Fast food">{placeholder => <option>{placeholder}</option>}</FormattedMessage>
                            <FormattedMessage id="Mexican">{placeholder => <option>{placeholder}</option>}</FormattedMessage>
                            <FormattedMessage id="Chinese">{placeholder => <option>{placeholder}</option>}</FormattedMessage>
                            <FormattedMessage id="Typical">{placeholder => <option>{placeholder}</option>}</FormattedMessage>
                            <FormattedMessage id="Fancy">{placeholder => <option>{placeholder}</option>}</FormattedMessage>
                            </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={4}><FormattedMessage id="Rating"/></Label>
                            <Col sm={8}>
                            <Input type="select" name="rating" aria-label="Rating Input" id="rating" value={this.state.rating}
                                   onChange={e => this.setState({rating: e.target.value})}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Input>
                            </Col>
                        </FormGroup>
                        <Button type='submit' style = {{'float': 'right'}}><FormattedMessage id="Submit"/></Button>
                    </Form>
                </div>
                );
    }
}
