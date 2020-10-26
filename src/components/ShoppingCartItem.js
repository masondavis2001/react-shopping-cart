import React, { useContext, useCallback } from 'react';
import { CartContext } from '../contexts';

const Item = props => {
	const { removeItem } = useContext(CartContext);

	const handleRemoval = useCallback(
		() => removeItem(props.id),
		[props.id]
	);

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={handleRemoval}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
