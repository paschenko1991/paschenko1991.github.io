import React, {Component} from 'react';

export default class ListItem extends Component {
	
	render() {
		let item = this.props.data;

		return (
			<li className="list__item" onClick={() => this.props.onItemSelect(item)}>
				<img src={item.image}/>				
				<p>{item.price} <span className="rub"></span></p>
				<h4>{item.name}</h4>
			</li>
		)
	}
		
}
