import React, { Component } from 'react';

import List from './Components/List.js';
import NavBar from './Components/NavBar.js';
import InfoPopup from './Components/InfoPopup.js';

import './style.styl';

import data from './data.js';

export default class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			data: data,
			selectedItem: data[0],
			cart: [],
			totalPrice: 0,
			infoPopupIsOpen: false
		};
		this.infoPopupOpen = this.infoPopupOpen.bind(this);
		this.infoPopupHide = this.infoPopupHide.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
	};
	
	infoPopupOpen() {
		this.setState({
			infoPopupIsOpen: true
		})
	};

	infoPopupHide() {
		this.setState({
			infoPopupIsOpen: false
		})
	};

	selectItem(item) {
		this.setState({
			selectedItem: item
		});
		this.infoPopupOpen();
	};
	
	addToCart(data) {
		let newData = this.state.cart.slice(0);
    newData.push(data);
    this.setState({
      cart: newData
    },() => {this.totalPrice()});
	};

	removeFromCart(item) {
		let newData = this.state.cart.slice(0);
		newData.splice(item, 1);
		this.setState({
			cart: newData
		},() => {this.totalPrice()});
	};

	totalPrice() {
		let total = 0;
		this.state.cart.forEach((item, index) => {
			if (item.quantity > 1 && item.quantity < 4) {
				total += item.price * item.quantity
			}
			else if (item.quantity > 3 && item.quantity < 6) {
				total += (item.price * item.quantity) - ((item.price * item.quantity) * 0.15)
			}
			else if (item.quantity > 5) {
				total += (item.price * item.quantity) - ((item.price * item.quantity) * 0.25)
			}
			else {
				total += item.price
			}
		});
		this.setState({
			totalPrice: total
		});
	}

	render() {
		return (
			<div className="container">
				<NavBar cart={this.state.cart} remove={this.removeFromCart} total={this.state.totalPrice}/>
				<List data={this.state.data} onItemSelect={this.selectItem.bind(this)}/>
				<InfoPopup
				 item={this.state.selectedItem} 
				 update={this.addToCart} 
				 popupIsOpen={this.state.infoPopupIsOpen}
				 popupHide={this.infoPopupHide}/>
			</div>
		);
	}
}
