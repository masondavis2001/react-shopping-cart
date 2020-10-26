import React, { useContext, useMemo } from 'react';

// Components
import Item from './ShoppingCartItem';

// Contexts
import { CartContext } from '../contexts';

const ShoppingCart = () => {
	const { cart } = useContext(CartContext);

	const cartTotal = useMemo(
		() => cart.reduce((acc, cur) => acc + cur.price, 0),
		[cart]
	);

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${cartTotal}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
