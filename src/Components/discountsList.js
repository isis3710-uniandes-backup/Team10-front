import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {FormattedMessage} from 'react-intl';
import {FormattedNumber} from 'react-intl';

export default class DiscountsList extends React.Component {
constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			  <Card>
                <CardImg top width="100%" src={this.props.discounts.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h1"><FormattedMessage id={this.props.discounts.dish}/></CardTitle>
                  <CardSubtitle>{this.props.discounts.restaurant}</CardSubtitle>
                  <CardText><FormattedNumber value={this.props.discounts.price}/></CardText>
                </CardBody>
              </Card>
            </div>
		);
	}
}