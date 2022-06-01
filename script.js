// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';
// addToCart(1, 'ponczek');
// console.log(price, totalQuantity);

// import * as ShoppingCart from './shoppingCart.js';
// console.log('Importing Module');

// ShoppingCart.addToCart(5, 'Plums');
import addToCart from './shoppingCart.js';

addToCart(4, 'pizzas');
addToCart(11, 'bananas');
addToCart(2, 'cucumbers');

import { cart } from './shoppingCart.js';
console.log(cart);
