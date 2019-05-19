import React from 'react';
import {FormattedMessage} from 'react-intl';
import {FormattedNumber} from 'react-intl';
import {Container,Row,Col} from 'reactstrap';
import { LineChart } from 'react-charts-d3';
import DishesList from './dishesList';
const API = "http://localhost:3001/dishes"

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"dishes":[]
		};
	}
	getDishes(){
		fetch(API)
		.then(response => response.json())
		.then(data => this.setState({...this.state,"dishes": data}));
	}
	componentDidMount(){
		this.getDishes()
	}
	getLoading(){
		return (<div className="loadingContainer"><div className="loading"></div></div>)
	}
	filtered = (dish) => {
		return dish.restaurantId === this.props.res.id;
	}
	render() {
                                    var graph_data = [];
                for(var i = 0; i < this.state.dishes.filter(this.filtered).length; ++i){
                    graph_data.push({ x: this.state.dishes.filter(this.filtered)[i]["name"], y: this.state.dishes.filter(this.filtered)[i]["price"] });
                }
                const data = [{key: 'Prices', values:graph_data}];
		return (
			<Container style={{'min-width':'70vw' ,'margin':'0'}}>
				<Row>
					<Col xs="4">
						<p><strong><FormattedMessage id="Description: "/></strong>{this.props.res.description}</p>
						<p><strong><FormattedMessage id="Average Price: "/></strong><FormattedNumber value={this.props.res.avgPrice}/></p>
					</Col>
					<Col xs = "8">
						{this.state.dishes.length==0?this.getLoading():<DishesList dishes={this.state.dishes.filter(this.filtered)}/>}
                                                {this.state.dishes.length==0?this.getLoading():<LineChart data={data} axisConfig={{ showXAxis: true, showXAxisLabel: true, xLabel: 'Dishes names', xLabelPosition: 'right', showYAxis: true, showYAxisLabel: false, yLabel: ''}}/>}
					</Col>
				</Row>
			</Container>
		);
	}
}
