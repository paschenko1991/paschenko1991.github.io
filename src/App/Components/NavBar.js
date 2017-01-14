import React, {Component} from 'react';
import { render } from 'react-dom';

import Cart from './Cart.js'

export default class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cartIsOpen: false
		};
		this.cartOpen = this.cartOpen.bind(this);	
		this.cartClose = this.cartClose.bind(this);	
	}
	
	cartOpen(e) {
		return e => {
			e.preventDefault();
			this.setState({
				cartIsOpen: true
			})
		}
	};
	
	cartClose() {
		this.setState({
			cartIsOpen: false
		})
	}

	render() {
		return (
			<div className="navbar">
				<a href="" className="btn-cart" onClick={this.cartOpen()}>
					<span className="cart-items">{this.props.cart.length}</span>
				</a>
				<Cart 
					cart={this.props.cart} 
					remove={this.props.remove} 
					total={this.props.total} 
					open={this.state.cartIsOpen}
					cartClose={this.cartClose}/>
			</div>
		);
	}
}
