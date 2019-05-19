import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { LineChart } from 'react-charts-d3';
import DiscountsList from './discountsList'
const API = "http://localhost:3001/promotions"

export default class Discounts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {"discounts":[],
                "data":[]};
	}
	getDiscounts(){
		fetch(API)
		.then(response => response.json())
		.then(data => this.setState({...this.state,"discounts": data}));
	}
	componentDidMount(){
		this.getDiscounts()
	}
	getLoading(){
		return (<div className="loadingContainer"><div className="loading"></div></div>)
	}
	render() {
                var graph_data = [];
                for(var i = 0; i < this.state.discounts.length; ++i){
                    graph_data.push({ x: this.state.discounts[i]["dish"], y: this.state.discounts[i]["price"] });
                }
                var data = this.state.data;
                if(graph_data.length!=0)
                {
                 data = [{key: 'Prices', values:graph_data}];   
                }
		let promotions = this.state.discounts.map(discounts =>{
			return(
				<Col sm = "2">
			      <DiscountsList discounts ={discounts}/>
			    </Col>
				)
		})
		return (
			<Container fluid>
			  <Row>
			    {promotions}
			  </Row>
                                  <Row>
                                  <Col sm = "12">
                    {data==0?this.getLoading():<LineChart data={data} axisConfig={{ showXAxis: true, showXAxisLabel: true, xLabel: 'Dishes names', xLabelPosition: 'right', showYAxis: true, showYAxisLabel: false, yLabel: ''}}/>}
                    </Col>
                    </Row>
			</Container>
		);
	}
}
