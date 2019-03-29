import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export default class DiscountsList extends React.Component {
constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			  <Card>
                <CardImg top width="100%" src="https://s3.ap-south-1.amazonaws.com/zzd-assets/merchant/medium/1533712638aapp2.PNG" alt="Card image cap" />
                <CardBody>
                  <CardTitle>{this.props.discounts.dish}</CardTitle>
                  <CardSubtitle>{this.props.discounts.restaurant}</CardSubtitle>
                  <CardText>{this.props.discounts.price}</CardText>
                </CardBody>
              </Card>
            </div>
		);
	}
}