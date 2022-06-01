console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

// export const addToCart = function (quantity, product) {
//   cart.push({ quantity, product });
//   console.log(`${quantity} ${product} was added to a cart.`);
// };

console.log(cart);

const totalPrice = 235;
const totalQuantity = 25;

export { totalPrice, totalQuantity };

export default function (quantity, product) {
  cart.push({ quantity, product });
  console.log(`${quantity} ${product} was added to a cart.`);
}
