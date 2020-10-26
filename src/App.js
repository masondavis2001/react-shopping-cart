import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Hooks
import useLocalStorage from './hooks/useLocalStorage';

// Contexts
import { ProductContext, CartContext } from './contexts';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', []);

	const addItem = item => setCart([...cart, item]);
	const removeItem = id => setCart(cart.filter(item => item.id !== id));

	return (
		<div className="App">
			<CartContext.Provider value={{ cart, removeItem }}>
				<Navigation />
				<Route path="/cart" component={ShoppingCart} />
			</CartContext.Provider>
			<ProductContext.Provider value={{ products, addItem }}>
				<Route exact path="/" component={Products} />
			</ProductContext.Provider>
		</div>
	);
}

export default App;
