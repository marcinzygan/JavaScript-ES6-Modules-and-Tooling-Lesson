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
// AWAIT IN MODULES WITHOUT ASYNC FUNCTION its blocking execution of the module
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     // console.log(data);
//     return { title: data.at(-1).title, text: data.at(-1).body };
//   } catch (err) {
//     console.log(err);
//   }
// };
// // const lastPost = getLastPost();
// // Not very clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// //MODULE PATTERN
// //IIFE
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10; // this one will be private
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (quantity, product) {
//     cart.push({ quantity, product });
//     console.log(`${quantity} ${product} was added to a cart.`);
//   };
//   const orderStock = function (quantity, product) {
//     cart.push({ quantity, product });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();
// shoppingCart2.addToCart(2, 'muffins');
// console.log(shoppingCart2);
// console.log(shoppingCart2.shippingCost);
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 6 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);
state.user.loggedIn = false;
