import { getProductById, checkStock } from './product.js';

let cartItems = [];

function addToCart(productId, quantity) {
  const product = getProductById(productId);

  if (!product) return "Product not found";

  if (!checkStock(productId, quantity)) {
    return "Insufficient stock";
  }

  const existingItem = cartItems.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return "Item added to cart";
}
function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return "Item removed from cart";
}
function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) {
    return "Insufficient stock to update quantity";
  }

  const item = cartItems.find(i => i.productId === productId);
  if (!item) return "Item not found in cart";

  item.quantity = newQuantity;
  return "Quantity updated";
}
function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity,
      totalPrice: product.price * item.quantity
    };
  });
}
function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.totalPrice, 0);
}
function clearCart() {
  cartItems = [];
}
export {addToCart,removeFromCart,updateQuantity,getCartItems,getCartTotal,clearCart}