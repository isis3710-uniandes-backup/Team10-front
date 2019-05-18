import React from 'react';
import Restaurant from './restaurant';
import {Container,Row} from 'reactstrap';
import { PieChart } from 'react-charts-d3';

export default class RestaurantList extends React.Component {
	
	constructor(props) {
		super(props);
	}
	translate(s) {
		switch(s){
			case 'Mejicana':
				return 'Mexican'
			case 'Todos':
				return 'All'
			case 'China':
				return 'Chinese'
			case 'Lujo':
				return 'Fancy'
			case 'Tipica':
				return 'Typical'
			case 'Comida Rapida':
				return 'Fast food'
			default :
				return s
		}
	}
	createRestaurant = (restaurant) => <Restaurant res={restaurant}/>;
	filtered = (restaurant) =>{
		if((this.translate(this.props.filter.category)==='All') || (this.translate(this.props.filter.category) === restaurant.category) )
			if(this.props.filter.price>=restaurant.avgPrice)
				if(this.props.filter.rating==restaurant.rating)
					return true;
		return false;
	}
	render() {
                            var graph_data = [];
                            var fast_food = 0;
                            var chinese = 0;
                            var fancy = 0;
                            var typical = 0;
                            var mexican = 0;
for(var i = 0; i < this.props.restaurants.filter(this.filtered).length; ++i){
    if(this.props.restaurants.filter(this.filtered)[i]["category"] == "Fast food"){
        fast_food++;
    }
        else if(this.props.restaurants.filter(this.filtered)[i]["category"] == "Chinese"){
        chinese++;
    }
        else if(this.props.restaurants.filter(this.filtered)[i]["category"] == "Fancy"){
        fancy++;
    }
        else if(this.props.restaurants.filter(this.filtered)[i]["category"] == "Typical"){
        typical++;
    }
        else if(this.props.restaurants.filter(this.filtered)[i]["category"] == "Mexican"){
        mexican++;
    }
}
graph_data.push({ label: 'Fast food', value: fast_food });
graph_data.push({ label: 'Chinese', value: chinese });
graph_data.push({ label: 'Fancy', value: fancy });
graph_data.push({ label: 'Typical', value: typical });
graph_data.push({ label: 'Mexican', value: mexican });
console.log(this.props.restaurants.filter(this.filtered));
		return (
			<div className="scrollable">
                <PieChart data={graph_data} />
			<Container>
				<Row>
					{this.props.restaurants.filter(this.filtered).map(this.createRestaurant)}
				</Row>
			</Container>
			</div>
		);
	}
}
