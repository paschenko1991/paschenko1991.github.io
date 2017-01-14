import React, {Component} from 'react';
import { render } from 'react-dom';

export default class InfoPopup extends Component {
	constructor(props) {
		super(props);
		
		this.state= {
			size: null,
			quantity: 1
		};
		this.chooseSize = this.chooseSize.bind(this);
		this.chooseQuantity = this.chooseQuantity.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.popupHide = this.popupHide.bind(this);
	}

	chooseSize(size) {
		this.setState({
			size: size
		})
	};

	chooseQuantity(e) {
		this.setState({
			quantity: e.target.value
		})
	};

	addToCart() {
		if (!this.state.size) {
			return
		}
		this.props.update({
			id: this.props.item.id,
			image: this.props.item.image,
			name: this.props.item.name,
			size: this.state.size,
			quantity: this.state.quantity,
			price: this.props.item.price
		});
	}

	popupHide(e) {
		return e => {
			e.preventDefault();
			this.props.popupHide();
		}
	}

	render() {
		let item = this.props.item;

		return (
			<div className={this.props.popupIsOpen ? 'info-popup--open' : 'info-popup'}>
				<div className="info">
					<div className="col">
	 					<img src={item.image} className="info__image"/>				
	 				</div>
	 				<div className="col">
	 					<h3 className="info__name">{item.name}</h3>
	 					<p className="info__desc">{item.desc}</p>
						<div className="info__sizes">
							{
								item.sizes.map((size, index) => {
									return (
										<label key={index} className="info__size">
											<input type="radio" name="options"/>
											<span  onClick={() => this.chooseSize(size)}>{size}</span>
										</label>
									)
								})
							}
						</div>
						<span className="info__price">Цена: {item.price}$</span>
						<label className="info__quantity">Количество: <input type="number" min="1" max="9" defaultValue="1" onChange={this.chooseQuantity}/></label>
						<button className="btn-buy" href="" onClick={this.addToCart}>Купить</button>
						<a className="popup-hide" href="" onClick={this.popupHide()}>&#10006;</a>				
	 				</div>
				</div>
			</div>
		);
	}
}




// WEBPACK FOOTER //
// src/App/Components/InfoPopup.js