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
					<ul className="cart-list">
						{
							this.props.cart.map((item, index) => {
								return (
									<li key={index} className="cart-list__item">
										<div className="col">
											<img src={item.image} alt="" className="item-image"/>
										</div>
										<div className="col">
											<h5 className="item-name">{item.name}</h5>
											<span>Размер: {item.size}</span>
											<span>Количество: {item.quantity}</span>
											<span>Цена: {item.price}$</span>
											<a className="item-remove" href="" onClick={this.removeItem(index)}>&#10006;</a>
										</div>
									</li>
								);
							})
						}
					</ul>
					<p className="total-price">Сумма: {this.props.total}$</p>
					<a className="cart-close" href="" onClick={this.cartClose()}>&#10006;</a>
				</div>
			</div>
		);
	}
}
