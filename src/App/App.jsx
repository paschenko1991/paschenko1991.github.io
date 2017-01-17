import React, { Component } from 'react';

import List from './components/List.jsx';
import NavBar from './components/NavBar.jsx';
import InfoPopup from './components/InfoPopup.jsx';

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
	
	infoPopup() {
		this.setState({
			infoPopupIsOpen: !this.state.infoPopupIsOpen
		});
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
		this.infoPopup();
		//this.infoPopupOpen();
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
			total += item.price; 
		});
		this.setState({
			totalPrice: total
		});
	}

	render() {
		return (
			<div className="main-layout">
				<header>
					<h2>Shoes Store on React</h2>
					<nav>
					   <NavBar cart={this.state.cart} remove={this.removeFromCart} total={this.state.totalPrice}/>
					</nav>
				</header>
				<main>
					<List data={this.state.data} onItemSelect={this.selectItem.bind(this)}/>
					<InfoPopup
						item={this.state.selectedItem} 
					 	update={this.addToCart} 
					 	popupIsOpen={this.state.infoPopupIsOpen}
					 	popupHide={this.infoPopupHide}/>
				</main>
				<footer>
					<p>
					    <i className="fa fa-code"> </i> Shoes Store + React
					    | <i className="fa fa-copyright"> </i> 2017
					    | Created by Vladislav Paschenko
					</p>
				</footer>
			</div>
		);
	}
}
