/** @format */

import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItemToCart } from '../../redux/cart/cart.ations';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItemToCart }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>

			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<span className='bt'>
				<CustomButton onClick={() => addItemToCart(item)}>
					Add to Cart
				</CustomButton>
			</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
