import React, { Component } from 'react';
import { render } from 'react-dom';

import ListItem from "./ListItem.js"

export default class List extends Component {
	constructor(props) {
		super(props);
		
		}
		
	render() {
		return (
			<ul className="list">
				{
					this.props.data.map(item => {
						return <ListItem
						 key={item.id}
						 data={item} 
						 onItemSelect={this.props.onItemSelect} 
						 />
					})
				}
			</ul>
		);
	}
}
