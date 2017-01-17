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
		this.addToCart = this.addToCart.bind(this);
		this.popupHide = this.popupHide.bind(this);
	}

	chooseSize(size) {
		this.setState({
			size: size
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
					<div className="col2">
						<a target="_blank" href={item.image} title="Open image in new window">
	 						<img src={item.image} className="info__image"/>	
	 					</a>		 								
	 				</div>
	 				<div className="col3">
	 					<h3 className="info__name">{item.name}</h3>
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
						<span className="info__price">Price: {item.price} <span className="rub"></span></span>
						<button className="btn-buy" href="" onClick={this.addToCart}>Buy</button>
						<p className="info__desc">{item.desc}</p>
						<a className="popup-hide" href="" onClick={this.popupHide()}>
							<span className="close"></span>
						</a>				
	 				</div>
				</div>
			</div>
		);
	}
}