import React, {Component} from 'react';
import render from 'react-dom';

export default class Cart extends Component {
	constructor(props) {
		super(props);
				
		this.removeItem = this.removeItem.bind(this);
		this.cartClose = this.cartClose.bind(this);
	}
	
	removeItem(item) {
		return e => {
			e.preventDefault();
			this.props.remove(item)
		}
	};

	cartClose(e) {
		return e => {
			e.preventDefault();
			this.props.cartClose();
		}
	}

	render() {
		return (
			<div className={this.props.open ? 'cart-popup--show' : 'cart-popup'}>
				<div className="cart">
					<h2 className="sct">Shoping Cart</h2>
					<ul className="cart-list">
						{
							this.props.cart.map((item, index) => {
								return (
									<li key={index} className="cart-list__item">
										<div className="col">
											<img src={item.image} alt="" className="item-image"/>
										</div>
										<div className="col">
											<h4 className="item-name">{item.name}</h4>
											<span>Size: {item.size}</span>
											<span>Price: {item.price} rub</span>
											<a className="item-remove" href="" onClick={this.removeItem(index)}>
												<span className="remove"></span>
											</a>
										</div>
									</li>
								);
							})
						}
					</ul>
					<p className="total-price">Price: {this.props.total} rub</p>
					<a className="cart-close" href="" onClick={this.cartClose()}>
						<span className="close"></span>
					</a>
				</div>
			</div>
		);
	}
}
